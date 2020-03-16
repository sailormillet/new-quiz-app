const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const LRUCache = require('lru-cache');

//本地跨域重定向
// const devProxy = {
//     '/api': {
//       target: 'http://localhost:3721',
//       pathRewrite: { '^/api': '/api' },
//       changeOrigin: true
//     }
// }
const devProxy = {
  '/api': {
    target: 'https://api.binance.vision/',
    pathRewrite: { '^/api': '/api' },
    changeOrigin: true
  }
};

// This is where we cache our rendered HTML pages
const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60 // 1hour
});

const app = next({ dev, quiet: false });

const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    // Set up the proxy.
    if (dev && devProxy) {
      const { createProxyMiddleware } = require('http-proxy-middleware');
      Object.keys(devProxy).forEach(context => {
        server.use(context, createProxyMiddleware(devProxy[context]));
      });
    }
    server.get('/glossary/:level', (req, res) => {
      const actualPage = '/glossary';
      const queryParams = { level: req.params.level };
      // Use the `renderAndCache` utility defined below to serve pages
      app.render(req, res, actualPage, queryParams);
    });
    server.get('*', (req, res) => {
      return handle(req, res);
    });
    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
/*
 * NB: make sure to modify this to take into account anything that should trigger
 * an immediate page change (e.g a locale stored in req.session)
 */
const getCacheKey = req => `${req.url}`;

// 缓存并渲染页面，具体是重新渲染还是使用缓存
async function renderAndCache(req, res, pagePath, queryParams) {
  const key = getCacheKey(req);
  if (ssrCache.has(key)) {
    res.setHeader('x-cache', 'HIT');
    res.send(ssrCache.get(key));
    return;
  }

  try {
    const html = await app.renderToHTML(req, res, pagePath, queryParams);

    // Something is wrong with the request, let's skip the cache
    if (res.statusCode !== 200) {
      res.send(html);
      return;
    }

    // Let's cache this page
    ssrCache.set(key, html);

    res.setHeader('x-cache', 'MISS');
    res.send(html);
  } catch (err) {
    app.renderError(err, req, res, pagePath, queryParams);
  }
}
