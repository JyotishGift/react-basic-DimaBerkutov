const webpack = require('webpack');
module.exports = {
    entry: './src/main.js',
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
            }
        ]
    },
    // devtool: '',
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
        open: true,
        port: 3000,
        inline: true,
        hot: true
    }
};