/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // 'experimental.appDir' wurde entfernt, da es jetzt Standard ist.

  images: {
    // 'domains' ist veraltet, 'remotePatterns' ist sicherer und moderner
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
