const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  // images: {
  //   domains: ['res.cloudinary.com', 'media.dev.to']
  // }
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.dev.to',
        port: '',
        pathname: '/account123/**',
      },
    ],
  },
}