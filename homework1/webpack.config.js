const webpack = require('webpack');

module.exports = {
    entry: './src/main',
    output: {
        filename: './bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [ 'css-loader' ]
            }
        ]
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
        open: true,
        port: 3000,
        inline: true,
        hot: true

    }
}