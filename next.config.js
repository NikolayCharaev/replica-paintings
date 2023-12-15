/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
    },
    images: {
      remotePatterns: [
        {
          protocol : 'https',
          hostname : 'lh3.googleusercontent.com'
        },
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io',
          port: '',
        },
      ],
    },
  }
  
  module.exports = nextConfig