/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static export for simple single-page application
  experimental: {
    outputStandalone: true,
  },
};

export default nextConfig;
