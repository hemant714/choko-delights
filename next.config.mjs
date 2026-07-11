import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the workspace root so Turbopack doesn't pick up an unrelated
  // parent-directory lockfile.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
