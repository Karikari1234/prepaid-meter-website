/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        TEST_API_URL: process.env.TEST_API_URL,
      }
}

module.exports = nextConfig
