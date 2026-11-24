/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
  },
  async rewrites() {
    return [{ source: '/my-salah/privacy', destination: '/my-salah/privacy.html' }];
  },
};

export default nextConfig;
