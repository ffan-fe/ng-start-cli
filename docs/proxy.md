#代理配置

为了方便本地调试和解决跨域问题, 在执行 gulp 启动调试时, 会启动代理服务器, 转发是可配置的, 见custom.env.config.js。

##参数

#### apiFilter:

配置第一级目录，代表该目录要走代理。

#### targetDomain：

目标API的host地址, 在调用后端接口时, 用的是相对路径, 接口路径是本地域名, 如: http://localhost:3000, 此项配置将localhost转发到targetDomain配置的域名(后端接口的域名), 并将cookie带过去.

#### cookie:

那些需要识别用户的Api，往往通过cookie来识别，在这里设置cookie

```
module.exports = {
  /**
  * dist path
  */
  distPath: './build',
  apiFilter: ['/api', '/database'],
  targetDomain: 'http://admin.xxxx.com/',
  cookie: 'PHPSESSID=sm9vejn7ffh0lqc0hfjklmd312'
};
```