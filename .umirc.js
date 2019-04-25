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
        hardSource: true,
      },
    ],
  ],
  publicPath: '/code-river-pc/',
  history: 'hash',
  cssLoaderOptions: {},
  alias: {
    component: path.resolve(__dirname, './src/component'),
    assets: path.resolve(__dirname, './src/assets'),
    src: path.resolve(__dirname, './src'),
  },
  chainWebpack(config, { webpack }) {},
};
