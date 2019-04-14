import React from 'react';
import { Tag as AntdTag } from 'antd';
import style from './style.less';

export default function Pagination({ className = '', ...props }) {

  return (
    <AntdTag
      {...props}
      className={`${style.tag} ${className}`}
    />
  );
}