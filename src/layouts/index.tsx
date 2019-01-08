import React from 'react';
import BasicLayout from './BasicLayout/';
import DisplayLayout from './DisplayLayout/';
import GlobalLayout from './GlobalLayout/';
import './BasicLayout/index.less';
import { ComProps } from '../type/common';
import { isNull } from 'util';

export default function(props: ComProps) {
  const firstLevenPath = getSinglePath(props.location.pathname);
  console.log(firstLevenPath);
  let ChlLayout = null;
  switch (firstLevenPath) {
    case 'display':
      ChlLayout = () => <DisplayLayout>{props.children}</DisplayLayout>;
      break;
    case 'coderiver':
      ChlLayout = () => <BasicLayout>{props.children}</BasicLayout>;
      break;
    default:
      ChlLayout = null;
      break;
  }
  return (
    <GlobalLayout>
      {isNull(ChlLayout) ? <>{props.children}</> : <ChlLayout>{props.children}</ChlLayout>}
    </GlobalLayout>
  );
}

// 根据路由名称获取不同等级的路由
export function getSinglePath(pathname = '/', level = 1) {
  const pathArr = pathname.split('/')[level];
  if (pathArr) {
    return pathArr;
  } else {
    return null;
  }
}
