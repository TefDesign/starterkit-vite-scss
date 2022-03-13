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
}