const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: [
        './src/index.ts'
    ],
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CopyPlugin({
            patterns: [
                { from: "./res", to: "res" },
            ],
        })
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /node_modules[/\\]createjs/,
                use: [{
                    loader: 'exports-loader',
                    options: {
                        type: 'commonjs',
                        exports: 'single window.createjs',
                    },
                }],
            },
            {
                test: /node_modules[/\\]createjs/,
                use: [{
                    loader: 'imports-loader',
                    options: {
                        wrapper: 'window',
                    },
                }],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            createjs: 'createjs/builds/1.0.0/createjs.js'
        }
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
    mode: "development"
};