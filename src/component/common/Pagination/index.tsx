import React from 'react';
import { Pagination as AntdPagination } from 'antd';
import style from './style.less';

export default function Pagination({ className = '', ...props }) {
  const itemRender = (page, type, originalElement) => {
    if (type === 'prev') {
      return <div className={style.prev}>上一页</div>;
    } else if (type === 'next') {
      return <a className={style.next}>下一页</a>;
    }
    return originalElement;
  };
  return (
    <AntdPagination
      itemRender={itemRender}
      {...props}
      className={`${style.pagination} ${className}`}
    />
  );
}
