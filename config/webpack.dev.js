const webpackConfig = require('./index');
const proxy = require('./webpack.proxy');

module.exports = webpackConfig(config => {
   config.merge({
       entry: {
           app: config.resolve('src', 'index.js')
       },
       output: {
           path: config.resolve('build'),
           filename: '[name].[hash:10].js'
       },
       devServer: {
           contentBase: config.resolve('src'),
           proxy: proxy,
           host: '0.0.0.0',
           port: '6543',
           disableHostCheck: true
       },
       plugins: [
           config.html('src', 'index.html'),
           config.resource('style.[hash:10].css')
       ]
   });
});