import React, { Component } from 'react';
import styles from './index.less';

export default class BasicHeader extends Component {
  render() {
    return (
      <footer className={styles['cr-footer']}>
        <div>
          <a href="www.baidu.com">footer</a>
        </div>
      </footer>
    );
  }
}
