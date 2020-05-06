const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'mymain.js',
        path: path.resolve(__dirname, 'dist')
    }
}