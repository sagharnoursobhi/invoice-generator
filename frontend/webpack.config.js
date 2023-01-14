const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    //configuration used by webpack
    mode: 'development',
    entry: {
        app: './src/index.js'
    },
    module: {
        rules: [
            {test: /\.(js | jsx)$/, use: ['babel-loader']}
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Invoice Generator',
            template: './src/template.ejs',
            filename: 'invoice.html',
            chunks: ['app']//it consists the js file that is attached to this html file
        })
    ],
    output: {
        //name will be replaced with app property
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devtool: 'inline-source-map'
}