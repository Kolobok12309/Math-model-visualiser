module.exports = {
  outputDir: 'docs',
  publicPath: '/math-model-visualiser/',
  transpileDependencies: [
    'vuetify',
  ],
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.worker\.js$/,
          use: {
            loader: 'worker-loader',
          },
        },
      ],
    },
  },
};
