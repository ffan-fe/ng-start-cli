

```
|- client/
  |- index.html ---------------------- angular inject template file
  |- app/
    |- app.js ------------------------ App entry file
    |- app.html ---------------------- App view
      |- common/ --------------------- Common component(like header, menu etc.)
        |- commonheader/ --------------------- header component
        |- commonmenu/ ----------------- menu component
      |- components/ ----------------- Components
      |- service/ -------------------- Api service bl
      |- skin/ --------------------- project skin
      |- router/ --------------------- Router folder
        |- routerConfig.js ---------- Router configuration file
|-.babelrc --------------------------- Babel configuration file
|-custom.env.config.js --------------- Project's configuration file(proxy setting etc.)
|-gulpfile.babel.js ------------------ gulp file
|-webpack.config.js ------------------ base webpack config file
|-webpack.dev.config.js -------------- dev webpack config file
|-webpack.dist.config.js ------------- production webpack config file
|-README.md -------------------------- developers, to get start, READ ME!!!
|-package.json ----------------------- npm package meta file
```