#gulp

项目使用 `gulp` + `webpack` 管理

提供打包、发布等命令

##打包

运行gulp webpack命令, 将项目打包到custom.env.config.js中配置的distPath。

```
gulp webpack
```

## 开发

运行gulp命令, 启动一个带browser-sync自动刷新功能的开发环境。

```
gulp
```

## 组件

运行gulp component命令, 快速新建组件。

参考 [component命令](./component.md)