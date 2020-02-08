const webpack = require('webpack');
const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',
    entry: './src/index.js',
    externals: [webpackNodeExternals()],
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
                },
            },
            {
                test: /\.css$/,
                use: ['isomorphic-style-loader', 'css-loader']
            },
            {
                test: /\.(svg|eot|woff|woff2|ttf|jpg|png)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'public/',
                        }
                    }
                ]
            },
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    }
};
