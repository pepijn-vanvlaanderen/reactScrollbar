module.exports = {
    resolve: {
        modules: ['node_modules', 'bower_components'],
        extensions: ['.js', '.jsx'],
        alias: {
            'react-scrollbar/no-css': '../../src/js/ScrollAreaWithoutCss.js',
            'react-scrollbar': '../../src/js/ScrollAreaWithCss.js'
        }
    },
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
    devtool: "inline-source-map"
};
