# 生成组件

增加一个页面模块, 执行 gulp component 命令。

```
gulp component --name componentName
```

#### 参数

`--name`：确定没有重名的模块，会覆盖已有同名模块，大小写不敏感。

`--parent`：可以通过该参数来改变生成的目录，基准目录是 client/app/components/。

#### 目录

```
|- componentName/  --------------------- Component's folder
  |- componentName.js  ----------------- Component's entry file
  |- componentName.component.js -------- Component file
  |- componentName.controller.js  ------ Controller
  |- componentName.html  --------------- View
  |- componentName.less  --------------- Styles
  |- componentName.spec.js  ------------ Unit Test
```