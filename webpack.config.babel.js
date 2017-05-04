export default {
  publicPath: "./public/",
  entry: {
    index: "./src/index",
    about: "./src/About",
    legacy: "./src/Legacy"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ["babel"],
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.css$/,
        loader: "style!css!postcss"
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "url"
      }
    ]
  },
  output: {
    path: __dirname + "/public",
    filename: "[name].bundle.js",
    chunkFilename: "[id].chunk.js"
  },
  resolve: {
    extensions: ["", ".js", ".jsx", ".json"]
  },
  target: "electron",
  plugins: []
};
