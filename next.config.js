/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Direkt auf oberster Ebene, nicht unter experimental
  allowedDevOrigins: ['192.168.178.40'],

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
      },
    ],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            titleProp: true,
          },
        },
      ],
    });
    return config;
  },
};

module.exports = nextConfig;
