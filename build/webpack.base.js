const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
function resolve(dir) {
  return path.join(__dirname, "..", dir);
}
module.exports = {
  entry: "./index.js",
  output: {
    publicPath: "/"
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
      },
      {
        test: /\.(jpg|gif|png|jpeg|svg|bmp)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              //如果图片超过下面这个数据所标注的大小，那么图片将不会被转换成base64的格式，直接会将图片文件扔到dist目录里
              limit: 1024 * 50,
              name: "imgs/[name].[hash:7].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "fonts/[name].[hash:7].[ext]"
        }
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
