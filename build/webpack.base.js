const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
function resolve(dir) {
  return path.join(__dirname, "..", dir);
}
module.exports = {
  entry: "./index.js",
  output: {
    path: resolve("dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".json"],
    alias: {
      "@": resolve("src")
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(css|less)$/,
        use: ["style-loader", "css-loader", "less-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "blog",
      template: "./template.html",
      filename: "index.html"
    })
  ]
};
