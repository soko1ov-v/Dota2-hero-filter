/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.cloudflare.steamstatic.com',
            port: '',
          },
        ],
      },
}

module.exports = nextConfig
