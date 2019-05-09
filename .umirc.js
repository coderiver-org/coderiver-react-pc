// ref: https://umijs.org/config/

import path from 'path';

export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: true,
        title: 'umi-ts',
        dll: true,
        routes: {
          exclude: [/models/, /service/],
        },
        hardSource: false,
      },
    ],
  ],
  publicPath: '/code-river-pc/',
  theme:'./src/theme.js',
  history: 'hash',
  cssLoaderOptions: {},
  alias: {
    component: path.resolve(__dirname, './src/component'),
    assets: path.resolve(__dirname, './src/assets'),
    src: path.resolve(__dirname, './src'),
  },
  // chainWebpack(config) {
  //   config.resolve.alias.set('src', path.resolve(__dirname, './src'));
  //   config.resolve.alias.set('component', path.resolve(__dirname, './src/component'));
  //   config.resolve.alias.set('assets', path.resolve(__dirname, './src/assets'));
  // },
};
