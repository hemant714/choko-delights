import { NextResponse } from "next/server";
import { google } from "googleapis";

// Google Sheets needs the Node.js runtime (not Edge).
export const runtime = "nodejs";

// ─────────────────────────────────────────────────────────────
// Appends a lead row to the configured Google Sheet using a
// service account. Credentials come from environment variables:
//   GOOGLE_SHEETS_CLIENT_EMAIL     — service account email
//   GOOGLE_SHEETS_PRIVATE_KEY      — service account private key (with \n)
//   GOOGLE_SHEETS_SPREADSHEET_ID   — the target spreadsheet ID
//   GOOGLE_SHEETS_TAB (optional)   — worksheet/tab name (default "Leads")
// Column order: Timestamp | Name | Phone | Enquiry | Source URL
// ─────────────────────────────────────────────────────────────
async function appendToSheet(row) {
  const {
    GOOGLE_SHEETS_CLIENT_EMAIL,
    GOOGLE_SHEETS_PRIVATE_KEY,
    GOOGLE_SHEETS_SPREADSHEET_ID,
    GOOGLE_SHEETS_TAB,
  } = process.env;

  if (
    !GOOGLE_SHEETS_CLIENT_EMAIL ||
    !GOOGLE_SHEETS_PRIVATE_KEY ||
    !GOOGLE_SHEETS_SPREADSHEET_ID
  ) {
    return { configured: false };
  }

  const auth = new google.auth.JWT({
    email: GOOGLE_SHEETS_CLIENT_EMAIL,
    // In env files newlines are escaped as \n — convert them back.
    key: GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  await sheets.spreadsheets.values.append({
    spreadsheetId: GOOGLE_SHEETS_SPREADSHEET_ID,
    range: `${GOOGLE_SHEETS_TAB || "Leads"}!A:E`,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: { values: [row] },
  });

  return { configured: true };
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request." },
      { status: 400 }
    );
  }

  const name = (body?.name || "").toString().trim();
  const phone = (body?.phone || "").toString().trim();
  const segment = (body?.segment || "").toString().trim();

  // Where the enquiry came from: prefer the URL the client sent, else the
  // Referer header, else "unknown".
  const sourceUrl =
    (body?.sourceUrl || "").toString().trim() ||
    request.headers.get("referer") ||
    "unknown";

  // Basic validation
  const phoneDigits = phone.replace(/\D/g, "");
  if (!name || phoneDigits.length < 10) {
    return NextResponse.json(
      { ok: false, message: "Please enter a valid name and phone number." },
      { status: 422 }
    );
  }

  // Human-readable Indian Standard Time, e.g. "18 Jul 2026, 05:56:26 pm"
  const receivedAt = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }).format(new Date());
  const lead = {
    receivedAt,
    name,
    phone,
    segment: segment || "Not specified",
    sourceUrl,
  };

  // Always log server-side (visible in Vercel function logs) as a backup.
  console.log("[LEAD]", lead);

  try {
    const result = await appendToSheet([
      receivedAt,
      name,
      phone,
      segment || "Not specified",
      sourceUrl,
    ]);
    if (!result.configured) {
      console.warn(
        "[LEAD] Google Sheets not configured — set GOOGLE_SHEETS_* env vars."
      );
    }
  } catch (err) {
    // Don't fail the user's submission if the sheet write errors — we still
    // have the console log as a fallback.
    console.error("[LEAD] Failed to write to Google Sheet:", err?.message || err);
  }

  return NextResponse.json({
    ok: true,
    message: `Thanks ${name}! Our in-house team has started working on your request and will reach out to you shortly.`,
  });
}
