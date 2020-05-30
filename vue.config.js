module.exports = {
  outputDir: 'docs',
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
