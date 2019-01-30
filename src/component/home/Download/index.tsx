import React, { Component } from 'react';
import HomeTitle from '../HomeTitle';
import styles from './index.less';
import dl from 'assets/images/home/dlbg.png';
import qr from 'assets/images/home/qr.png';
import { Icon } from 'antd';

export default function CodeRiverDownload(props) {
  return (
    <div className={styles['coderiver-download']}>
      <HomeTitle title={'下载移动端'} color={'#fabf30'} />
      <div className="coderiver-download-main" style={{ backgroundImage: `url(${dl})` }}>
        <button>
          IOS版&nbsp;&nbsp;&nbsp;&nbsp;
          <Icon type="qrcode" />
          <img src={qr} alt="" />
        </button>
        <button>
          Android版&nbsp;&nbsp;&nbsp;&nbsp;
          <Icon type="qrcode" />
          <img src={qr} alt="" />
        </button>
      </div>
    </div>
  );
}
