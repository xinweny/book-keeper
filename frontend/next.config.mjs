/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static export for simple single-page application
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
};

export default nextConfig;
