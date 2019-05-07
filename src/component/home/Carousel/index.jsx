import React from 'react';
import { Carousel as AntdCarousel } from 'antd';
import styles from './styles.less';

export default function Carousel() {
  return (
    <AntdCarousel className={styles.carousel} autoplay>
      <div className="">11</div>
      <div className="">22</div>
    </AntdCarousel>
  );
}
