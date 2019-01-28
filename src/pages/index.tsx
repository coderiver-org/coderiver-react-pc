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
import router from 'umi/router';
import Button from '@material-ui/core/Button';

export default function() {
  // 留作权限验证判断跳转
  router.push('/coderiver');
  return (
    <div className={'normal'}>
      <div className={'welcome'} />
      <ul className={'list'}>
        <li>
          To get started, edit <code>src/pages/index.js</code> and save to reload.
        </li>
        <li>
          <Button variant="contained" color="primary">
            material button
          </Button>
        </li>
        <li>
          <Computed />
          <Link to="/display">go to display</Link>
        </li>
      </ul>
    </div>
  );
}
// {/* <a href="https://umijs.org/guide/getting-started.html">Getting Started</a> */}
// {/*<ButtonWithDefaultProps />*/}
//
