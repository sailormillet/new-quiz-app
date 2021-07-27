# develop

## 这些脚本涉及开发应用程序的不同阶段：
```
dev - 运行 next，在开发模式下启动 Next.js
build - 运行 next build，生成用于生产环境的应用程序
start - 运行 next start，启动 Next.js 生产环境服务器
```

## not ssr project
```
 npm run dev //http://localhost:3000
``` 

if you want change another port

```
npm run dev -- -p <port> //http://localhost:port
```
## ssr project
**npm run ssrdev**

 运行命令 `npm run ssrdev` 打开3000端口,至此可以通过美化后的路由访问到页面了 localhost:3000/glossary/beginner
```
 npm run ssrdev // 可以通过nodemon 来代替node,这样server.js 文件修改后不需要重新运行脚本
```

```
 npm run ssrstart // 需要先执行 npm run build
```
 
## mock
```
 npm run mock // 启动mock数据
```

```
 npm run mock // 启动mock数据
```
## eslint
```
 npm run lint  

 npm run fix   
```

###  LRUCache (缓存ssr-cache)
###  eslint
###  isomorphic-unfetch
###  mocker-api
###  mockjs
###  postcss-pxtorem 
###  http-proxy-middleware
###  express
###  less

