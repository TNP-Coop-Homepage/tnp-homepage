import nextPWA from "next-pwa";

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "nicovideo.cdn.nimg.jp",
      "cdn.discordapp.com",
      "media.discordapp.net",
    ],
  },
  async rewrites() {
    return [
      {
        source: "/posts/:slug/images/:path*",
        destination: "/api/posts/:slug/images/:path*",
      },
    ];
  },
};

const withPWA = nextPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

export default withPWA(nextConfig);
