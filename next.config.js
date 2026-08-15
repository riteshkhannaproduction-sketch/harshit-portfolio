/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    // Allow all local images from /public
    unoptimized: false,
  },
}

module.exports = nextConfig
