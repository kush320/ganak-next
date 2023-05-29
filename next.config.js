/** @type {import('next').NextConfig} */

// const isAuthenticated = false
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:4000/:path*"
      },
    ];
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/login',
  //       permanent: true,
  //     },
  //   ];
  // },

}

module.exports = nextConfig
