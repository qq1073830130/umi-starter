// ref: https://umijs.org/config/
import path from 'path'

function resolve(dir) {
  return path.join(__dirname, './', dir)
}

/* 清除console */
let extraBabelItem = []
if (process.env.NODE_ENV === 'production') {
  extraBabelItem.push(['transform-remove-console', { exclude: ['error', 'warn'] }])
}

export default {
  history: 'hash',
  publicPath: '/static/',
  outputPath: './dist/static',
  theme: { '@primary-color': 'red' },
  hash: true,
  sass: {
    data: '@import "~@/sass/_base/index.scss";'
  },
  define: {
    'process.env.TEST': 1,
    BASE_URL: 'www.baidu.com'
  },
  alias: {
    '@': resolve('src'),
    '~components': resolve('src/components'),
    '~common': resolve('src/common'),
    '~pages': resolve('src/pages'),
    '~models': resolve('src/models'),
    '~assets': resolve('src/assets'),
  },
  "proxy": {
    // "/api": {
    //   "target": "http://jsonplaceholder.typicode.com/",
    //   "changeOrigin": true,
    //   "pathRewrite": { "^/api" : "" }
    // }
  },
  browserslist: ['last 20 version', 'Android > 4.0', 'not ie <= 8'],
  extraBabelPlugins: [].concat(extraBabelItem),
  chainWebpack(config, { webpack }) {
    /* 包分析 */
    if (process.env.NODE_ENV === 'production') {
      const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
        .BundleAnalyzerPlugin
      const CompressionWebpackPlugin = require('compression-webpack-plugin')

      /* build包分析 */
      process.env.ANALYZER === 'true' &&
        config.plugin('webpack-bundle-analyzer').use(BundleAnalyzerPlugin)

      /* gzip */
      process.env.GZIP === 'true' &&
        config.plugin('compression').use(CompressionWebpackPlugin, [
          {
            algorithm: 'gzip',
            test: /\.(js|css)$/,
            threshold: 10240,
            minRatio: 0.8
          }
        ])
    }
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: true,
        dll: true,
        routes: {
          exclude: []
        },
        hardSource: false,
        title: {
          defaultTitle: 'app'
        },
        fastClick: true
      }
    ]
  ]
}
