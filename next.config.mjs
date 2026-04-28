/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "imageio.forbes.com/specials-images/imageserve/5f734aff89e00a39860a6877",
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
