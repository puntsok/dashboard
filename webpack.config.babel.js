
require('dotenv').config()

const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const WebpackNotifierPlugin = require('webpack-notifier')


const absolute = dir => path.join(__dirname, dir)
const TARGET = process.env.npm_lifecycle_event

// in .babelrc, allow hot reloading while during 'npm start'
process.env.BABEL_ENV = TARGET

class Pack {

  constructor() {

    this.isBuild = (TARGET === 'build')
    this.setUpPaths()
    this.setUpEntry()
    this.setUpOutput()
    this.setUpPlugins()
    this.setUpModule()
    this.setUpDevServer()
  }
  setUpPaths() {

    this.appPath   = absolute('src')
    this.buildPath = absolute('public')
  }
  setUpEntry() {

    this.entry = {
      app: this.appPath,
    }
  }
  setUpOutput() {

    this.output = {
      path: this.buildPath,
      filename: 'js/bundle.js',
    }
  }
  setUpPlugins() {

    const commonPlugins = [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: `"${process.env.NODE_ENV}"`,
          APP_ENV: `"${process.env.APP_ENV}"`,
          DASHBOARD_API_URL: `"${process.env.DASHBOARD_API_URL}"`,
          NPM_LIFECYCLE_EVENT: `"${TARGET}"`,
        }
      }),
      new webpack.ProvidePlugin({
        fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
      }),
    ]

    if (this.isBuild) {

      this.plugins = [ ...commonPlugins,

        new ExtractTextPlugin('css/style.css', {
            allChunks: true
        }),
        new webpack.optimize.UglifyJsPlugin({
          compress: {warnings: false},
          comments: false,
          sourceMap: false,
        }),
      ]
    } else {

      this.plugins = [ ...commonPlugins,

        new webpack.HotModuleReplacementPlugin(),
        new WebpackNotifierPlugin(),
      ]
    }
  }
  setUpModule() {

    const { isBuild } = this

    const sassLoader = isBuild ?
      ExtractTextPlugin.extract('style-loader', 'css!sass') :
      "style!css?sourceMap!sass?sourceMap";

    const loaders = [
      {
        loaders: ['babel?cacheDirectory'],
        test: /\.jsx?$/,
        include: this.appPath,
      },
      {
        loader: sassLoader,
        test: /\.scss$/,
        include: this.appPath,
      }
    ]

    this.module = {loaders}
  }
  setUpDevServer() {

    this.devServer = this.isBuild ? undefined : {
      contentBase: this.buildPath,
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      stats: 'errors-only',
      host: process.env.HOST,
      port: process.env.PORT,
    };
  }
  get() {

    return {
      entry: this.entry,
      output: this.output,
      plugins: this.plugins,
      module: this.module,
      devServer: this.devServer,
      devtool: this.isBuild ? undefined : 'eval-source-map', // fix?
      resolve: {extensions: ['', '.js', '.jsx']}, // fix this by taking out
    }
  }
}

const pack = new Pack()
const config = pack.get()

module.exports = config
