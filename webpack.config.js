const path = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv");
const nodeExternals = require("webpack-node-externals");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");

let outputPath = './.env/client.development.env'
switch (process.env.TYPE) {
  case 'build':
    outputPath = './.env/client.build.env';
    break;
  case 'test':
    outputPath = './.env/client.test.env';
    break;
  default:
    outputPath = './.env/client.development.env';
    break;
}
const env = dotenv.config({ path: outputPath }).parsed;
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

const serverConfig = {
  entry: "./src/server/index.js",
  devtool: "inline-source-map",
  target: "node",
  node: {
    __dirname: false,
    __filename: false,
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    ],
  },
  resolve: {
    extensions: [ ".tsx", ".ts", ".js", ".jsx" ],
  },
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "dist"),
  },
};

const clientConfig = {
  entry: "./src/client/index.jsx",
  devtool: "inline-source-map",
  target: "web",
  mode: "none",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ["emotion"]
        }
      },
      {
        test: /\.css$/,
        use: [
          { 
            loader: process.env.NODE_ENV !== "production" ? "style-loader" : MiniCssExtractPlugin.loader 
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: process.env.NODE_ENV !== "production" ? true : false,
            },
          },
        ],
        exclude: /\.module\.css$/
      },
      {
        test: /\.css$/,
        use: [
          { 
            loader: process.env.NODE_ENV !== "production" ? "style-loader" : MiniCssExtractPlugin.loader 
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              modules: true,
              sourceMap: process.env.NODE_ENV !== "production" ? true : false
            }
          }
        ],
        include: /\.module\.css$/
      },
      {
        test: /\.s[ca]ss$/,
        use: [
          { 
            loader: process.env.NODE_ENV !== "production" ? "style-loader" : MiniCssExtractPlugin.loader 
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: process.env.NODE_ENV !== "production" ? true : false,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: process.env.NODE_ENV !== "production" ? true : false,
            },
          },
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1000,
              name: "img/[name].[ext]"
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|sql)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/"
            }
          }
        ]
      }
    ],
  },
  resolve: {
    extensions: [ ".tsx", ".ts", ".js", ".jsx" ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    chunkFilename: "[id].js",
    publicPath: ""
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "client", "index.html"),
      filename: "index.html",
      inject: "body"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new webpack.DefinePlugin(envKeys),
    new CompressionPlugin(),
    new ManifestPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: process.env.NODE_ENV !== "production" ? "json" : "disabled" ,
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["!server.js"],
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    historyApiFallback: true,
    compress: true,
    port: 80
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  }
};

module.exports = [ serverConfig, clientConfig ];