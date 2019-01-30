import React, { Component } from 'react';
import HomeTitle from '../HomeTitle';
import styles from './index.less';
import ep from 'assets/images/home/ep.png';
import { Icon } from 'antd';

export default function ExcellentProject(props) {
  return (
    <div className={styles['excellent-project']}>
      <HomeTitle title={'优秀项目推荐'} path={'/'} color={'yellowgreen'} />
      <div className="excellent-project-main">
        <div className="excellent-project-main-box">
          <div className="img">
            <img src={ep} alt="" />
          </div>
          <p className="title">项目名称</p>
          <p className="detail">项目描述</p>
          <p className="action">
            <span className="eye">
              <Icon type="eye" />
              30000
            </span>
            <span className="like">
              <Icon type="like" />
              30000
            </span>
          </p>
        </div>
        <div className="excellent-project-main-box">
          <div className="img">
            <img src={ep} alt="" />
          </div>
          <p className="title">项目名称</p>
          <p className="detail">项目描述</p>
          <p className="action">
            <span className="eye">
              <Icon type="eye" />
              30000
            </span>
            <span className="like">
              <Icon type="like" />
              30000
            </span>
          </p>
        </div>
        <div className="excellent-project-main-box">
          <div className="img">
            <img src={ep} alt="" />
          </div>
          <p className="title">项目名称</p>
          <p className="detail">项目描述</p>
          <p className="action">
            <span className="eye">
              <Icon type="eye" />
              30000
            </span>
            <span className="like">
              <Icon type="like" />
              30000
            </span>
          </p>
        </div>
        <div className="excellent-project-main-box">
          <div className="img">
            <img src={ep} alt="" />
          </div>
          <p className="title">项目名称</p>
          <p className="detail">项目描述</p>
          <p className="action">
            <span className="eye">
              <Icon type="eye" />
              30000
            </span>
            <span className="like">
              <Icon type="like" />
              30000
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
