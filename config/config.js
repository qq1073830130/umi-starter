// ref: https://umijs.org/config/
import path from 'path'
import webpackConf from './webpack.config'
import routeConf from './router.config';

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
  treeShaking: true,
  hash: true,
  routes: routeConf,
  sass: {
    data: '@import "~@/sass/_base/index.scss";'
  },
  define: {
    'process.env.TEST': 1,
    BASE_URL: 'www.baidu.com'
  },
  alias: {
    '@': path.join(__dirname, './src'),
  },
  "proxy": {
    // "/api": {
    //   "target": "http://jsonplaceholder.typicode.com/",
    //   "changeOrigin": true,
    //   "pathRewrite": { "^/api" : "" }
    // }
  },
  /* 不参与webpack打包的包 */
  externals: {
    // '包名': '用于访问的全局变量名',
    // "react": "window.React",
    // "react-dom": "window.ReactDOM"
  },
  targets: {
    android: 4,
    ios: 7
  },
  // targets: {
  //   ie: 9,
  // },
  autoprefixer: {
    browsers: ['last 7 version', 'Android >= 4.0', 'not ie <= 11'],
  },
  extraBabelPlugins: [].concat(extraBabelItem),
  chainWebpack: webpackConf,
  ignoreMomentLocale: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: {
          hmr: true,
        },
        dynamicImport: {
          loadingComponent: './components/PageLoading/index',
        },
        dll: true,
        routes: {
          exclude: []
        },
        title: {
          defaultTitle: 'app'
        },
        // chunks: ['app'],
        // fastClick: true
      }
    ]
  ]
}
