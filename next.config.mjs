import nextPWA from "next-pwa";

/** @type {import("next-pwa").PWAConfig} */
const nextConfig = nextPWA({
  dest: "public",
  // disable: process.env.NODE_ENV === "development",
});

nextConfig.reactStrictMode = true;

export default nextConfig;
