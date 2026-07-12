import { NextResponse } from "next/server";

// Bulk-order lead capture endpoint.
//
// TODO: Wire this up to a Google Sheet. The client will provide the sheet
// later. Recommended approach: a Google Apps Script Web App URL stored in
// process.env.GOOGLE_SHEET_WEBHOOK - then POST the lead payload to it here.
//
// For now we validate the input, log it server-side, and return a success
// message confirming the number has been recorded.
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

  // Basic validation
  const phoneDigits = phone.replace(/\D/g, "");
  if (!name || phoneDigits.length < 10) {
    return NextResponse.json(
      { ok: false, message: "Please enter a valid name and phone number." },
      { status: 422 }
    );
  }

  const lead = {
    name,
    phone,
    segment: segment || "Not specified",
    receivedAt: new Date().toISOString(),
  };

  // Placeholder for Google Sheet write.
  console.log("[LEAD CAPTURED - pending Google Sheet setup]", lead);

  return NextResponse.json({
    ok: true,
    message: `Thanks ${name}! Our in-house team has started working on your request and will reach out to you shortly.`,
  });
}
