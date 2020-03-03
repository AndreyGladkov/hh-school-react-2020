const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


const isDevelopment = process.env.NODE_ENV && process.env.NODE_ENV === 'development';

module.exports = {
  entry: {
    index: ['@babel/polyfill', './src/index.js']
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-react",
              ['@babel/preset-env', { targets: "> 0.25%, not dead, ie 11" }]
            ],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        }]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name: './images/[name].[ext]',
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 70
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              }
            }
          },
        ]
      },
      {
        test: /\.less$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')({
                  'overrideBrowserslist':
                    [
                      "last 2 chrome version",
                      "last 2 firefox version",
                      "last 2 safari version",
                      "last 2 ie version"
                    ]
                })
              ]
            }
          },
          'less-loader'
        ]
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: false,
      minify: isDevelopment ? false : { collapseWhitespace: true },
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
  ],
  devtool: isDevelopment ? 'source-map' : 'hidden-source-map',
  optimization: {
    minimizer: [
      new TerserJSPlugin({}),
      new OptimizeCSSAssetsPlugin({
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        },
      })
    ],
  },
  devServer: {
    port: 3000,
    hot: isDevelopment ? true : false
  }
}