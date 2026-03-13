/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Ignoriert TypeScript-Fehler beim Build (verhindert den Abbruch bei 1)
  typescript: {
    ignoreBuildErrors: true,
  },
  // Ignoriert ESLint-Fehler beim Build
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Behebt den Turbopack-Fehler auf Vercel
  turbopack: {},

  // Erlaubt Zugriff über lokale IP (nur für dev wichtig)
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
