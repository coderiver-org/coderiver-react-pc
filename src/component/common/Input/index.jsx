import React, { Component } from 'react';

import styles from './index.less';
import { Input } from 'antd';

export default class BasicHeader extends Component {
  render() {
    const { type } = this.props;
    if (type && type === 'password') {
      return (
        <div className={styles['input-container']}>
          <Input.Password {...this.props} />
        </div>
      );
    }
    return (
      <div className={styles['input-container']}>
        <Input {...this.props} />
      </div>
    );
  }
}
