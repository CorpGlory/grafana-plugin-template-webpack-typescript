const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  target: 'node',
  context: __dirname + "/src",
  entry: './module.ts',
  output: {
    filename: "module.js",
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: "amd"
  },
  externals: {
    "grafana/app/plugins/sdk": "app/plugins/sdk"
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new CopyWebpackPlugin([
      { from: 'plugin.json' },
    ])
  ],
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, 
        loaders: [
          {
            loader: "babel-loader",
            options: {
              presets: ['env']
            }
          },
          "ts-loader"
        ], 
        exclude: /node_modules/,
      }
    ]
  }
}