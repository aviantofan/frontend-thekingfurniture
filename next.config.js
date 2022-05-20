/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    // NEXT_PUBLIC_BACKEND_URL: 'http://3.83.39.175:4000',
    NEXT_PUBLIC_BACKEND_URL: 'http://localhost:5000',
    // NEXT_PUBLIC_BACKEND_URL: 'http://3.83.39.175:4000'
  },
  images: {
    // loader: "cloudinary",
    // path: "https://res.cloudinary.com",
    domains: ['res.cloudinary.com']
  }
}

module.exports = nextConfig

