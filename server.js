const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

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
}

app.prepare()
.then(() => {
    const server = express()
    // Set up the proxy.
    if (dev && devProxy) {
        const { createProxyMiddleware } = require('http-proxy-middleware');
        Object.keys(devProxy).forEach((context) =>{
            server.use(context, createProxyMiddleware(devProxy[context]))
        })
    }
    server.get('/glossary/:id', (req, res) => {
        const actualPage = '/glossary'
        const queryParams = { title: req.params.id } 
        app.render(req, res, actualPage, queryParams)
    })
    server.get('*', (req, res) => {
        return handle(req, res)
    })
    server.listen(3000, (err) => {
        if (err) throw err
        console.log('> Ready on http://localhost:3000')
    })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
