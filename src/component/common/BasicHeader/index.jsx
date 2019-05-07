import React, { Component } from 'react';
import router from 'umi/router';

import { Icon,Button } from 'antd';
import styles from './index.less';
import Nav from './nav';

import logo from 'assets/svg/logo@2x.svg';

export default class BasicHeader extends Component {
  state = {
    current: 'home',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    const { current } = this.state;
    return (
      <header className={`${styles.headerWrap} ${current === 'home' ? styles.home : ''}`}>
        <a className={styles.logo} href="/">
          <img src={logo} alt="coderiver河码" width="214" height="50" />
        </a>
        <Nav onClick={this.handleClick} current={this.state.current} className={styles.nav} />
        <div className={styles.rightContent}>
          <div className={`${styles.search}`}>
            <Icon type="search" />
          </div>
          <Button className={`${styles.btn} ${styles.login}`} type="primary" onClick={() => router.push('/login')}>登录</Button>
          <Button className={`${styles.btn} ${styles.register}`}>注册</Button>
        </div>
      </header>
    );
  }
}
