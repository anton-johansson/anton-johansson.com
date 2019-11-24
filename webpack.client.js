const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/client/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-react',
                        ['@babel/env', { targets: { browsers: ['last 2 versions'] } }]
                    ]
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(svg|eot|woff|woff2|ttf|jpg|png)$/,
                use: ['file-loader']
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    devServer: {
        contentBase: './public',
        port: 8000,
        historyApiFallback: {
            index: "/index.html",
        },
    }
};
