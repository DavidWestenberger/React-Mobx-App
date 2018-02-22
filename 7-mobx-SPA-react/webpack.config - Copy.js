var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, "src"),
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./js/main.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader', 
          options: {
            presets: ['react', 'es2015', 'stage-0'],
            plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties']
          }
        }
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.(jpe?g|png|gif|svg)$/i,
        use: [{
          loader: 'file-loader',
          // options: {
          //    name: '[sha512].[ext]'
          // }
        }, 
        {
          loader: 'image-webpack-loader',
          options: {
            bypassOnDebug: true,
            optimizationLevel: 7,
            interlaced:false
          }
        }]
      }
    ],
  },
  output: {
    path: path.join(__dirname, "src"),
    filename: "main.min.js"
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    contentBase: './',
    hot: true
  }
};
