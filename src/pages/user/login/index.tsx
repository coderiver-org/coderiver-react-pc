import React, { Component } from 'react';

import styles from '../style.less';
export default class Index extends Component {
  componentDidMount() {
    console.log('componentDidMount() {');
  }

  render() {
    return (
      <div className={styles.login}>
        <div>logo</div>
        <h1>登录</h1>
        <p>还没有张虎？创建新账户</p>
      </div>
    );
  }
}
