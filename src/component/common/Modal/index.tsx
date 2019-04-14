import React from 'react';
import { Modal as AntdModal} from 'antd';
import style from './style.less';

export default function Pagination({ className = '', footer, ...props }) {

  return (
    <AntdModal
      {...props}
      className={`${style.modal} ${className}`}
      footer={footer? footer:null}
    />
  );
}