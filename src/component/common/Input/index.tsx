import React, { Component } from 'react';

import styles from './index.less';
import { Input } from 'antd';

export default class BasicHeader extends Component {
  render() {
    return (
      <div className={styles['input-container']}>
        <Input />
      </div>
    );
  }
}
