# ng-start-cli

fancyui的生成器,使用见:http://www.fancyui.org/#/zh-cn/component/install

项目原型为内部系统Adam项目

## 文档索引

 - [目录结构](./docs/dir.md)
 - [组件](./docs/component.md)
 - [gulp](./docs/gulp.md)
 - [接口代理](./docs/proxy.md)
 - [前端路由](./docs/router.md)

## 快速上手

```
npm i -g ng-start-cli
```

## 命令

### 初始化项目目录
```
ng-start-cli init
enter your project name
```

### 启动项目开发环境
```
cd project/dir/
ng-start-cli start
```

### 增加组件
```
cd project/dir/
npm run add "componentName" 
or
gulp component --name "componentName"
```

### 打包
```
ng-start-cli build
```
