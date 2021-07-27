const withLess = require('@zeit/next-less');
const isProd = process.env.NODE_ENV === 'production';
module.exports = withLess({
  distDir: 'dist',
  exportPathMap: async function (defaultPathMap) {
    return {
      '/': { page: '/' },
      '/difficulty': { page: '/difficulty' },
    }
  },
  pageExtensions: ['jsx', 'js'],
  assetPrefix: isProd ? '/new-quiz-app' : '',
  // assetPrefix: isProd ? 'https://cdn.xxx.com' : '',
  // useFileSystemPublicRoutes: false
  /* config options here */
  webpack(config, options) {
    //之后的其他webpack配置也在这里配置
    return config;
  }
});
