/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "ipfs.io",
      "gateway.pinata.cloud",
      "res.cloudinary.com",
      "github.com",
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig
