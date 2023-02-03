/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config.js');
const nextConfig = {
  i18n,
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      fallback: {
        fs: false,
        path: false,
        os: false,
      },
    };
    return config;
  },
};

module.exports = nextConfig;
