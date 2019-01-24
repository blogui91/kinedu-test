const htmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const Env = require('./config/env')
const path = require('path')
module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'), // Main file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public/index.html'),
    historyApiFallback: true, // this prevents the default browser full page refresh on form submission and link change
    port: 3333,
    hot: true, //enable hot module replacement feature
  }, //end of dev-server configuration
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
      components: path.resolve(__dirname, 'src/components'),
      helpers: path.resolve(__dirname, 'src/helpers'),
      plugins: path.resolve(__dirname, 'src/plugins'),
      services: path.resolve(__dirname, 'src/services')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }]
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader', //translates css into commonJS
          'sass-loader' // compile Sass to CSS using node sass by default
        ]
      }
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './public/index.html',
      title: 'Hot Module Replacement'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': Env.parse()
    })
  ]
}
