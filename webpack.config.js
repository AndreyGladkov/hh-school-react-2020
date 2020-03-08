const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const ImageminWebpackPlugin = require("imagemin-webpack-plugin").default;
const CopyWebpackPlugin = require("copy-webpack-plugin");


const isDevelopment = process.env.NODE_ENV === "development";
const isProduction = !isDevelopment;


const optimize = () => {
    if (!isProduction) return {};

    const config = {};
    config.minimizer = [new OptimizeCssAssetsPlugin(), new TerserWebpackPlugin()];
    return config;
};

module.exports = {
    devtool: isDevelopment ? "source-map" : "",
    context: path.resolve(__dirname, "src"),
    mode: "production",
    entry: ["@babel/polyfill", "./index.js"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-react",
                            ["@babel/preset-env", { targets: "> 0.25%, not dead, ie 11" }]
                        ],
                        plugins: ["@babel/plugin-proposal-class-properties"]
                    }
                }
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            minimize: true,
                            hmr: isDevelopment,
                            reloadAll: true
                        }
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "less-loader"
                    }
                ]
            },
            {

                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
                loader: "url-loader",
                options: {
                    name: "[name].[ext]?[hash]"
                }
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: "file-loader",
                options: {
                    name: "[path][name].[ext]"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            minify: {
                collapseWhitespace: isProduction
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({ filename: "bundle.css" }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.optimize\.css$/g,
            cssProcessor: require("cssnano"),
            cssProcessorPluginOptions: {
                preset: ["default", { discardComments: { removeAll: true } }]
            },
            canPrint: true
        }),
        new CopyWebpackPlugin([
            {
                from: "images/",
                to: "images"
            }
        ]),
        new ImageminWebpackPlugin({
            test: /\.(jpe?g|png|gif|svg)$/i,
            disable: isDevelopment,
            optipng: {
                optimizationLevel: 3
            },
            jpegtran: {
                progressive: true
            }
        })
    ],
    devServer: {
        port: 3000,
        hot: isDevelopment
    },
    optimization: optimize()
};