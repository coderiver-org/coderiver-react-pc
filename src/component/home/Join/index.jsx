import React from 'react';
import {Button,Icon } from 'antd'
import styles from './styles.less';

export default function Join() {
  return (
    <div className={styles.join}>
      <div className="inner">
        <div className={styles.title}>马上加入CodeRiver</div>
        <div className={styles.subTitle}>资源共享创造更大世界</div>
        <div className={styles.btns}>
          <Button className={`${styles.btn} ${styles.createProject}`} type="primary">
            <Icon type="plus" />创建项目
          </Button>
        </div>
      </div>
    </div>
  )
}
