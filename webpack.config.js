const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'public', 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/,
            },
            {
                use: ['style-loader', 'css-loader', 'sass-loader'],
                test: /\.s?css/,
            },
        ],
    },
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        publicPath: '/dist/',
    },
    devtool: 'cheap-module-eval-source-map',
}