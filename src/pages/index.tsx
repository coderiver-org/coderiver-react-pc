/**
 * 注释路由
 * title:Index Page
 * Routes:- ./src/pages/display/index.tsx
 *   - ./src/pages/display/index.tsx
 */

import React from 'react';
// import ButtonWithDefaultProps from './test/Button';
import Computed from './test/Computed';
import Link from 'umi/link';
import Redirect from 'umi/redirect';
import Button from '@material-ui/core/Button';

/* 配置主题样式 */
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  // 可以配置颜色,间距等等
  palette: {
    primary: { main: 'red' },
  },
});

// 根组件

export default function() {
  // 留作权限验证判断跳转
  return (
    <MuiThemeProvider theme={theme}>
      <Redirect to={'/coderiver'} />
    </MuiThemeProvider>
  );
}
