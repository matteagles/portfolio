/**
 * @type {import('next').NextConfig}
 */

const path = require('path')
 
// module.exports = {
 
// }


const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['res.cloudinary.com', 'media.dev.to']
  },
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true
  }
}
 
module.exports = nextConfig