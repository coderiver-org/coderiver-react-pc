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

import teal from '@material-ui/core/colors/teal';

const primary = teal[500]; // #F44336

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#ff4400' },
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
