/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  env: {
    MONGODB_URI: 'mongodb://localhost:27017/test',
  },
};

module.exports = nextConfig;
