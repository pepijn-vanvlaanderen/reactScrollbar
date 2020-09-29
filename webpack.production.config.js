'use strict'

var webpack = require('webpack');
var baseConfig  = require('./webpack.base.config.js');
var objectAssign = require('object-assign');

var config = objectAssign({}, baseConfig);

config.plugins = [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
    })
];

module.exports = config;
