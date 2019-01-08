import React, { Component } from 'react';
import styles from './index.less';

export default class BasicHeader extends Component {
  render() {
    return (
      <header className={styles['cr-header']}>
        <div>
          <a href="www.baidu.com">header</a>
        </div>
      </header>
    );
  }
}
