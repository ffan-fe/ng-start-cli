#路由配置

配置地址：client/app/router/routerConfig.js, 统一配置，支持埋点，code splitting 等.

```
export default [
  {
    name: 'build',
    url: "/demo/start",
    template: '',
    lazyload: require("bundle?lazy&name=start!../components/start/start.js"),
    tracking: {
      key: 'ROUTENAME'
    }
  },
  {
    name: 'button',
    url: "/demo/button",
    template: '',
    lazyload: require("bundle?lazy&name=button!../components/button/button.js"),
    tracking: {
      key: 'ROUTENAME'
    }
  },
  {
    name: 'modal',
    url: "/demo/modal",
    template: '',
    lazyload: require("bundle?lazy&name=modal!../components/modal/modal.js"),
    tracking: {
      key: 'ROUTENAME'
    }
  }
]
```