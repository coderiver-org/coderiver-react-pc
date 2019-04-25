import React, { Component } from 'react';

import styles from '../style.less';
export default class Index extends Component {
  render() {
    return (
      <div className={styles.login}>
        <div className={styles.logo} />
        <h1 className={styles.title}>登录</h1>
      </div>
    );
  }
}
