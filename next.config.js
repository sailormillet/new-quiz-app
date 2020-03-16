const withLess = require('@zeit/next-less');
const isProd = process.env.NODE_ENV === 'production';
module.exports = withLess({
  distDir: 'dist',
  pageExtensions: ['jsx', 'js'],
  assetPrefix: isProd ? 'https://cdn.xxx.com' : '',
  // useFileSystemPublicRoutes: false
  /* config options here */
  webpack(config, options) {
    //之后的其他webpack配置也在这里配置
    return config;
  }
});
