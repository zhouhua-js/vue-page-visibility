const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'vue-page-visibility.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'vue-page-visibility',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }]
    },
    devtool: 'cheap-source-map',
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: false
            },
            sourceMap: true
        })
    ]

};
