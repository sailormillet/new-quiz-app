const withLess = require('@zeit/next-less');
const isProd = process.env.NODE_ENV === 'production';
module.exports = withLess({
  distDir: 'dist',
  exportPathMap: async function (defaultPathMap) {
    return {
      '/': { page: '/' },
      '/difficulty': { page: '/difficulty' },
      // '/glossary/beginner':{ page:'/glossary', query:{ level:'beginner'}},
      // '/glossary/intermediate':{ page:'/glossary', query:{ level:'intermediate'}},
      // '/glossary/advanced':{ page:'/glossary', query:{ level:'advanced'}}
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
