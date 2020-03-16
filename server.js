const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
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
/*
 * NB: make sure to modify this to take into account anything that should trigger
 * an immediate page change (e.g a locale stored in req.session)
 */
function getCacheKey(req) {
  return `${req.url}`;
}

function renderAndCache(req, res, pagePath, queryParams) {
  const key = getCacheKey(req);

  // If we have a page in the cache, let's serve it
  if (ssrCache.has(key)) {
    console.log(`CACHE HIT: ${key}`);
    res.send(ssrCache.get(key));
    return;
  }

  // If not let's render the page into HTML
  app
    .renderToHTML(req, res, pagePath, queryParams)
    .then(html => {
      // Let's cache this page
      console.log(`CACHE MISS: ${key}`);
      ssrCache.set(key, html);

      res.send(html);
    })
    .catch(err => {
      app.renderError(err, req, res, pagePath, queryParams);
    });
}

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
      renderAndCache(req, res, actualPage, queryParams);
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
