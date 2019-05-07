import React, { Component } from 'react';
import styles from './index.less';
// import logo from 'assets/images/home/logo@2x.png';
import android from 'assets/images/home/android@2x.png';
import ios from 'assets/images/home/ios@2x.png';
import github from 'assets/images/home/Github@2x.png';
import wbicon from 'assets/images/home/wb-icon@2x.png';
import wxicon from 'assets/images/home/wx-icon@2x.png';

export default class BasicFooter extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <div className={styles.IM_Icon}>
          <img style={{ width: 28, margin: '0 15px' }} src={github} alt="" />
          <img style={{ width: 28, margin: '0 15px' }} src={wbicon} alt="" />
          <img style={{ width: 28, margin: '0 15px' }} src={wxicon} alt="" />
        </div>
        <div className={styles.appStore}>
          <img style={{ width: 140, marginRight: 10 }} src={android} alt="" />
          <img style={{ width: 100 }} src={ios} alt="" />
        </div>
        <div className="copyRight">
          {'©2018-2019 All Rights Reserved. Coderiver'}
        </div>
      </footer>
    );
  }
}
