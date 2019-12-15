require('babel-core/register');
let config = require('./webpack.config.dev');
config.mode = 'production';

module.exports = config;

