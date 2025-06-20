const { withContentlayer } = require("next-contentlayer");
const withNextIntl = require("next-intl/plugin")();
// './i18n.ts'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

// module.exports = nextConfig;
module.exports = withNextIntl(withContentlayer(nextConfig));
