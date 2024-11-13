/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static export for simple single-page application
  basePath: process.env.NODE_ENV === 'production' ? '/book-keeper' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
