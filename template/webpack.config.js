var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var colors = require('colors/safe');

var HappyPack = require('happypack');
var os = require('os');

function moduleConsole(module){
  if(module && module.resource){
    let size = parseInt(module._source.size()/1000);
    let info =`moduleName:${module.resource}, moduleSize: ${  parseInt(module._source.size()/1000)} kb`;
    if(size>50){
      console.log(colors.red(info));
    }
    else{
      console.log(info)
    }
  }
}

module.exports = {
  devtool: 'sourcemap',
  entry: {
    vendor: ['angular', 'jquery']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [/app\/lib/, /node_modules\/(?!(fancyui)\/).*/],
        loaders: ['happypack/loader?id=js']
      },
      {test: /\.html$/, loaders: ['happypack/loader?id=html']},
      {test: /\.less$/, loaders: ['happypack/loader?id=less']},
      {test: /\.css$/, loaders: ['happypack/loader?id=css']},
      // IMAGE
      {
        test: /.(gif|jpe?g|png)$/,
        loaders: ['happypack/loader?id=img']
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/,
        loaders: ['happypack/loader?id=font']
      }
    ]
  },
  resolve: {
    alias: {
      'angular': path.resolve(path.join(__dirname, 'node_modules', 'angular'))
    }
  },
  plugins: [
    new HappyPack({
      id: 'js',
      threads: os.cpus().length,
      loaders: ['ng-annotate!babel']
    }),
  
    new HappyPack({
      id: 'less',
      threads: os.cpus().length,
      loaders: [
      
        {
          loader: "style-loader"
        },
        {
          loader: "css-loader",
          options: {
            minimize: true,
          }
        },
        {
          loader: "less-loader",
        }]
    }),
    new HappyPack({
      id: 'css',
      threads: os.cpus().length,
      loaders: [
        {
          loader: "style-loader"
        },
        {
          loader: "css-loader",
          options: {
            minimize: true,
          }
        }]
    }),
    new HappyPack({
      id: 'img',
      threads: os.cpus().length,
      loaders: ['file-loader?name=assets/img/img-[chunkhash].[ext]']
    }),
    new HappyPack({
      id: 'html',
      threads: os.cpus().length,
      loaders: ['raw-loader']
    }),
    new HappyPack({
      id: 'font',
      threads: os.cpus().length,
      loaders: ['file-loader?name=assets/font/[name].[ext]']
    }),
    // Injects bundles in your index.html instead of wiring all manually.
    // It also adds hash to all injected assets so we don't have problems
    // with cache purging during deployment.
    new HtmlWebpackPlugin({
      template: 'client/index.ejs',
      inject: 'body',
      hash: true
    }),

    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor','manifest'],
      minChunks: function (module, count) {
        return module.resource && module.resource.indexOf(path.resolve(__dirname, 'client')) === -1;
      }
    })
    
  ]
};
