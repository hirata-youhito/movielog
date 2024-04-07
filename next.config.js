/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'image.tmdb.org',
          port: '',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'api.themoviedb.org',
          port: '',
          pathname: '**',
        },
      ],
    },
  }