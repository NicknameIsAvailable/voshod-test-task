/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'test.taxivoshod.ru',
                pathname: '/images/cars/**',
            },
        ],
    },
};

export default nextConfig;
