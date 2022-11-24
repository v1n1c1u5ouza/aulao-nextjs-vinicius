const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: __dirname + "/public",
    filename: "./app.js",
  },
  devServer: {
    port: 8080,
    contentBase: "./public",
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
    alias: {
      modules: __dirname + "node_modules",
      jQuery: "modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js",
      bootstrap: "modules/admin-lte/bootstrap/js/bootsstrap.js",
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),
    new ExtractTextPlugin("app,css"),
  ],
  module: {
    loaders: [
      {
        test: /.js[x]?$/,
        loaders: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "react"],
          plugins: ["transform-object-rest-spread"],
        },
      },
      {
        test: /\.woff|.woff2|.tff|.eot|.svg|.png|.jpg*.*$/,
        loader: "file",
      },
    ],
  },
};
