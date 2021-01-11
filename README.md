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

# 如何用Github的gh-pages分支展示自己的项目
>master分支仅是浏览代码，而无法将页面直接在网页打开，而gh-pages分支则是用于直接浏览源码页面的分支。当我们写项目的时候，需要部署一个预览页面，就可以采用github的gh-pages分支制作GitHub Pages。
接下来举个例子：如何将我的电脑上“在线教育页面作品”上传到GitHub，并实现在线预览
git安装完成后，首先配置信息
```
配置用户名：  git config --global user.name "用户名"
配置邮箱： git config--global user.email "邮箱地址"
查看配置信息： git config --list
```
1.先将作品上传到master分支上
```
git init //把目标文件夹变为git工作区
```
接下来输入以下两行命令行:
```
git remote add origin https://github.com/xxx/xxx.git
git push -u origin master
```
2.创建gh-pages分支,再将作品重新上传到该分支上
```
git checkout -b gh-pages
git push -u origin gh-pages
```
那这时候，我们看到已经多出了一个gh-pages分支，那么作品展示地址就是Github用户名.github.io/创建的仓库名。本例子线上预览https://ljianshu.github.io/xxx
3.master修改后如何自动同步到gh-pages分支
每次当作品发生更改变动后，要先提交到master分支然后切换到gh-pages分支又重新提交一次，显然这个过程非常繁琐。接下我们介绍一种方法，只需提交到master分支即可，gh-pages分支无需重新提交，就可实现在线预览：
打开github项目文件的根目录，先找到.git 这个文件夹（文件夹默认是隐藏的），然后找到config这个文件，并打开该文件，在文件里加入以下两句代码即可：
```
push = +refs/heads/master:refs/heads/gh-pages
push = +refs/heads/master:refs/heads/master
```