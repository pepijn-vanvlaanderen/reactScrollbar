'use strict'

var webpack = require('webpack');

module.exports = {
    resolve: {
        modules: ['node_modules', 'bower_components'],
        extensions: ['.js', '.jsx']
    },

    output: {
        library: 'ScrollArea',
        libraryTarget: 'umd'
    },

    externals: [
        {
            "react": {
                root: "React",
                commonjs2: "react",
                commonjs: "react",
                amd: "react"
            }
        }
    ],

    module: {
        rules: [
            {
                test: /\.jsx$/,
                include: /src/,
                loader: "babel-loader"
            },
            {
                test: /\.less$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'less-loader' },
                ]
            }
        ]
    },

    mode: 'production',
};
