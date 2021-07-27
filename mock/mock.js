/**
 *
 * 本文件一般放共用mock数据，不易频繁变动。
 * 开发自己的业务请在local文件中扩展
 */
const glob = require('glob');
const extend = require('extend');
const path = require('path');
const mockjs = require('mockjs');

const proxy = false;

const proxyServer = {
  _proxy: {
    proxy: {
      // '/api/(.*)': 'http://xx.x.xxx.xxx:12760',//ip
      // '/api/*': 'http://xxx.x.xxx.xxx:12790',
    },
    changeHost: true,
    httpProxy: {
      options: {
        changeOrigin: true,
        headers: {
          ID: '100016180'
        },
        ignorePath: true
      },
      listeners: {
        // proxyReq: function(proxyReq, req, res, options) {
        //   console.log('proxyReq');
        // }
      }
    }
  }
};

//需要自己创建
const data = {
  'GET /api/hi': (req, res) => {
    res.json({
      id: 1,
      //query 方法获取Get参数,如 /api/hi?name=tony
      username: req.query['name']
    });
  },
  //可以直接使用mockjs生成mock数据
  'GET /api/mock': mockjs.mock({
    'list|10-100': 1
  })
};
glob.sync(path.join(__dirname, '[!mock]*.js')).forEach(val => {
  extend(true, data, require(val));
});
module.exports = proxy ? proxyServer : data;
