/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  images: {
    domains: ['www.petsy.online', 'res.cloudinary.com'],
  },
  transpilePackages: ['mui-tel-input'],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@component': path.resolve(__dirname, 'src/components'),
      '@src': path.resolve(__dirname, 'src') 
    };
    return config;
  },
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true, // If using Styled Components
  },
  experimental: {
    swcMinify: true, // Ensure SWC is enabled
    forceSwcTransforms: true, // Force SWC even with Babel
  },
};

export default nextConfig;
