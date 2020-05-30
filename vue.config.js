module.exports = {
  publicPath: '/Math-model-visualiser/',
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
