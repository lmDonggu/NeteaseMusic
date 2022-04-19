# NeteaseMusic

1.clone网易云音乐API项目和此项目到本地

2.按照说明，本地启动网易云音乐API

3.将后端基础访问地址填写到根目录下 common/config.js中，例：export const baseUrl = 'http://localhost:3000'

4.运行项目



# 网易云音乐 API

网易云音乐 Node.js API service  https://github.com/Binaryify/NeteaseCloudMusicApi

## 环境要求

需要 NodeJS 8.12+ 环境

## 安装

```shell
$ git clone git@github.com:Binaryify/NeteaseCloudMusicApi.git 

$ npm install
```

或者

```shell
$ git clone https://github.com/Binaryify/NeteaseCloudMusicApi.git

$ npm install
```

## 运行
调用前务必阅读文档的`调用前须知`

```shell
$ node app.js
```

服务器启动默认端口为 3000,若不想使用 3000 端口,可使用以下命令: Mac/Linux

```shell
$ PORT=4000 node app.js
```

windows 下使用 git-bash 或者 cmder 等终端执行以下命令:

```shell
$ set PORT=4000 && node app.js
```

## Vercel 部署

v4.0.8 加入了 Vercel 配置文件,可以直接在 Vercel 下部署了,不需要自己的服务器

### 操作方法

1. fork 此项目
2. 在 Vercel 官网点击 `New Project`
3. 点击 `Import Git Repository` 并选择你 fork 的此项目并点击`import`
4. 点击 `PERSONAL ACCOUNT` 的 `select`
5. 直接点`Continue`
6. `PROJECT NAME`自己填,`FRAMEWORK PRESET` 选 `Other` 然后直接点 `Deploy` 接着等部署完成即可  
