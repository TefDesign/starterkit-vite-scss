const path = require('path');

module.exports = {
    mode: 'development',
    entry: './assets/js/index.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'public')
    },
    devServer: {
        static: path.join(__dirname, 'public'),
        port: 3000
    },
    module: {
        rules: [
            {
              test: /\.m?js$/,
              exclude: /(node_modules)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ]
    }
}