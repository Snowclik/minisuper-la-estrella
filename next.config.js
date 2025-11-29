/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com'],
    },
    output: 'standalone',
    outputFileTracingRoot: require('path').join(__dirname),
}

module.exports = nextConfig
