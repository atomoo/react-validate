var webpack = require("webpack");

module.exports = {
  entry: [
    "webpack-dev-server/client?http://127.0.0.1:11112",
    "webpack/hot/only-dev-server",
    "./test/render.jsx"
  ],
  output: {
    publicPath: "http://127.0.0.1:11112/dist/",
    filename: "scripts/render.js"
  },
  module: {
    loaders: [
      {test: /\.(js|jsx)$/, loaders: ["react-hot", "babel?presets=react"], exclude: /node_modules/},
      {test: /\.less$/, loader: "style!css!less"}
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};