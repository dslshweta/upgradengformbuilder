const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: {
        ajs: './src/app.module.ajs.ts',
        app: './src/main.ts',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../../', 'dist')
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css?$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss?$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                use: 'file-loader'
            },
            {
                test: /\.html$/,
                use: 'raw-loader'
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        //new BundleAnalyzerPlugin(),
        /* Need to explore this in detail at https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693 */
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor',
        //     filename: '[name].bundle.js',
        //     minChunks(module, count){
        //         var context = module.context;
        //         return context && context.indexOf('node_modules') >= 0;
        //     }
        // })
    ]
};