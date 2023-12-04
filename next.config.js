/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        TEST_API_URL: process.env.TEST_API_URL,
        NEXT_PUBLIC_RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY
      },
      experimental: {
        serverActions: {
          allowedOrigins: ['180.211.137.7:90']
        }
      }
}

module.exports = nextConfig
