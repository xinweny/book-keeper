/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static export for simple single-page application
  basePath: '/book-keeper',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
