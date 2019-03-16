# umi-starter
标准umi启动配置，用于快速的启动一个umi项目。
包含开发中可能会用到的配置项和一套初始配置，并且整合了build时移除console、gzip、构建包内容分析等常用功能。

<br>
<br>

### 使用
1. 安装umi并构建好项目
2. 移动文件目录下文件到umi项目根目录
3. 添加以下依赖

<br>

```js
yarn add babel-plugin-transform-remove-console compression-webpack-plugin eslint-plugin-html eslint-plugin-react eslint-plugin-vue node-sass sass-loader cross-env --dev
yard add react-transition-group mockjs
```

<br>
<br>

### 配置思路
![silu](https://raw.githubusercontent.com/qq1073830130/umi-starter/master/umi.jpg 'pic')
