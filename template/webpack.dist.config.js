var webpack = require('webpack');
var path    = require('path');
var config  = require('./webpack.config');
var customConfig = require('./custom.env.config');

var os = require('os');
var ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');
var ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
var WebpackMd5Hash = require('webpack-md5-hash');

var distPath = customConfig.distPath;

config.output = {
  filename: '[name].bundle.js',
  chunkFilename:'[name].min.js',
  publicPath: '',
  path: distPath
};

config.plugins = config.plugins.concat([
  // Reduces bundles total size
  new ParallelUglifyPlugin({
    cacheDir: '../breeze_webpackcache', // Optional absolute path to use as a cache. If not provided, caching will not be used.
    workerCount: os.cpus().length, // Optional int. Number of workers to run uglify. Defaults to num of cpus - 1 or asset count (whichever is smaller)
    uglifyJS: {
      // workers: os.cpus().length,
      compress: {
        warnings: false
      },
      sourceMap: false,
      // mangle: false
      mangle: {
        // You can specify all variables that should not be mangled.
        // For example if your vendor dependency doesn't use modules
        // and relies on global variables. Most of angular modules relies on
        // angular global variable, so we should keep it unchanged
        except: ['$super', '$', 'exports', 'require', 'angular']
      }
    },
  }),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('sit'),
      'DEBUG': false
    }
  }),
  //引入manifest
  new WebpackMd5Hash(),
  new ManifestPlugin(),
  new ChunkManifestPlugin({
    filename: "chunk-manifest.json",
    manifestVariable: "webpackManifest",
    inlineManifest: true
  })
]);

module.exports = config;
