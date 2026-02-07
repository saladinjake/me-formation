/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    serverExternalPackages: ['better-sqlite3'],
};

export default nextConfig;
