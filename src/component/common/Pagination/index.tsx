import React, { Component } from 'react';
import { Pagination as AntdPagination } from 'antd';
import style from './style.less';

export default class Pagination extends Component {
  itemRender = (page, type, originalElement) => {
    if (type === 'prev') {
      return <div className={style.prev}>上一页</div>;
    } else if (type === 'next') {
      return <a className={style.next}>下一页</a>;
    }
    return originalElement;
  };
  render() {
    const { className = '', ...props} = this.props;
    return (
      <AntdPagination
        itemRender={this.itemRender}
        className={`${style.pagination} ${className}`}
        {...props}
      />
    )
  }
}

