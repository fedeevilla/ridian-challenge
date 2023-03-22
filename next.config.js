/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    backendURL: process.env.BACKEND_URL,
  },
};

module.exports = nextConfig;
