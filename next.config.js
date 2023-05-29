/** @type {import('next').NextConfig} */

// const isAuthenticated = false
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api",
        destination: `${process.env.BACKEND_URL}/:api`
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
  env: {
    API_URL: `${process.env.BACKEND_URL}`
  }

}

module.exports = nextConfig
