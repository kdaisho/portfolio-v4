const path = require("path");
const webpack = require("webpack");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const outputDirectory = "dist";

module.exports = {
    entry: ["babel-polyfill", "./src/client/index.js"],
    output: {
        path: path.join(__dirname, outputDirectory),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg|jpe?g)$/,
                loader: "url-loader?limit=4000"
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"]
    },
    devServer: {
        port: 3000,
        open: true,
        historyApiFallback: true,
        proxy: {
            "/api": "http://localhost:8080",
            "/send": "http://localhost:8080"
        }
    },
    plugins: [
        // new BundleAnalyzerPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPattern: ["./dist/*"]
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
            // favicon: "./public/favicon.ico"
        })
    ]
};
