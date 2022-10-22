# tbk 管理系统
包含admin前端和server服务端
### 环境准备

- vue-cli v4.2.3
- Node.js v12.13.0
- MongoDB v4.2.17

### 安装MongoDB数据库

进入[官网](https://www.mongodb.com/try/download/community)下载，版本是4.2.17，平台是Windows，安装包为msi格式

### 项目开发

#### 1. 克隆项目至本地：

```sh
$ git clone https://github.com/pea-cake/tbk-manage.git
$ cd tbk-manage
```

#### 2. 安装后台(admin)及后端(server)项目依赖：

```sh
$ npm install
```

#### 3. 运行后台(admin)及后端(server)项目：

```sh
$ npm run serve
```

#### 4. 打开浏览器预览：

http://localhost:8090 打开后台本地页面。

第一次后台admin登陆时请先注册用户，登录后可以将注册按钮隐藏以防登录账户泄露。