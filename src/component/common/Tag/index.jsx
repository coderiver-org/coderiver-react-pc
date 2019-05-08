import React from 'react';
import { Tag as AntdTag } from 'antd';
import style from './style.less';

export default class Tag extends React.Component {
  render() {
    const { className = '', ...props } = this.props;
    return <AntdTag className={`${className}`} {...props} />;
  }
}
