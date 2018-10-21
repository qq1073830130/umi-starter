const CompressionWebpackPlugin = require('compression-webpack-plugin');

export default config => {
  /* 包分析 */
  if (process.env.NODE_ENV === 'production') {
    /* gzip */
    process.env.GZIP === 'true' &&
      config.plugin('compression').use(CompressionWebpackPlugin, [
        {
          algorithm: 'gzip',
          test: /\.(js|css)$/,
          threshold: 10240,
          minRatio: 0.8
        }
      ]);
  }
};
