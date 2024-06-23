/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['ik.imagekit.io'], // Add other domains if needed
  },
  // If you're using the new app directory structure
  experimental: {
    appDir: true,
  },
};

export default nextConfig;