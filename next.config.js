/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
};
module.exports = {
  images: {
    loader: 'imgix',
    path: '/',
  },
};

module.exports = nextConfig;
