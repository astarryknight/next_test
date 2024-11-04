/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/next_test/' : '',
  basePath: isProd ? '/next_test' : '',
  output: 'export'
};

export default nextConfig;
