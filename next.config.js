/** @type {import('next').NextConfig} */

const isAuthenticated = true
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: isAuthenticated ? '/suchi' : '/login',
        permanent: true,
      },
      {
        source: '/login',
        destination: isAuthenticated ? '/suchi' : '/login',
        permanent: true,
      },
      {
        source: '/register',
        destination: isAuthenticated ? '/suchi' : '/register',
        permanent: true,
      }
    ];
  },

}

module.exports = nextConfig
