import React, { Component } from 'react';
import { Button } from 'antd';
import styles from './style.less';

export default class Index extends Component {
  render() {
    return (
      <Button variant="contained" className={styles.crButton}>
        登录
      </Button>
    );
  }
}
