import React from 'react';
import { Button, Icon } from 'antd';
import styles from './styles.less';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className="inner">
        <div className={styles.title}>CodeRiver河码专注于IT行业</div>
        <div className={styles.subtitle}>集教学研实战公益为一体的综合社区</div>
        <div className={styles.btns}>
          <Button className={`${styles.btn} ${styles.createProject}`} type="primary">
            <Icon type="plus" />创建项目
          </Button>
          <Button className={`${styles.btn} ${styles.createProject}`}>快速组队</Button>
        </div>
      </div>
    </div>
  );
}
