import React, { Component } from 'react';
import { Modal as AntdModal } from 'antd';
import style from './style.less';

export default class Modal extends Component {
  render() {
    const { className = '', footer, ...props } = this.props;
    return (
      <AntdModal
        {...props}
        className={`${style.modal} ${className}`}
        footer={footer ? footer : null}
      />
    );
  }
}
