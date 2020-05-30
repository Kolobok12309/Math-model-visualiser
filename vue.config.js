const process = require('process');

module.exports = {
  publicPath: process.env.PUBLIC_PATH || '/',
  transpileDependencies: [
    'vuetify',
  ],
  chainWebpack: (config) => {
    config.module
      .rule('worker')
      .test(/\.worker\.js$/)
      .use('worker-loader')
      .loader('worker-loader')
      .end()
      .use('babel-loader')
      .loader('babel-loader')
      .end();

    config.module.rule('js').exclude.add(/\.worker\.js$/);
  },
};
