import React from 'react';
import { Carousel } from 'antd';
import styles from './index.less';
import bgimg from 'assets/images/home/bg@2x-1.png';

export default function Banner(props) {
  const onChange = (a = 0, b = 0, c = 0): void => {
    console.log(a, b, c);
  };
  return (
    <div className={styles['home-banner']}>
      <Carousel afterChange={onChange}>
        <div>
          <div className={'home-banner-box'}>
            <div
              className={'home-banner-box-img'}
              style={{
                backgroundImage: `url(${bgimg})`,
                backgroundSize: 'cover',
                backgroundPosition: '56%',
              }}
            >
              <p>近23万优秀开发者</p>
              <p>您的专属云端开发团队</p>
              <div className={'banner-button-group'}>
                <button>新建项目</button>
                <button>快速组队</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={'home-banner-box'}>
            <div
              className={'home-banner-box-img'}
              style={{
                backgroundImage: `url(${bgimg})`,
                backgroundSize: 'cover',
                backgroundPosition: '56%',
              }}
            >
              <p>近23万优秀开发者</p>
              <p>您的专属云端开发团队</p>
              <div className={'banner-button-group'}>
                <button>新建项目</button>
                <button>快速组队</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={'home-banner-box'}>
            <div
              className={'home-banner-box-img'}
              style={{
                backgroundImage: `url(${bgimg})`,
                backgroundSize: 'cover',
                backgroundPosition: '56%',
              }}
            >
              <p>近23万优秀开发者</p>
              <p>您的专属云端开发团队</p>
              <div className={'banner-button-group'}>
                <button>新建项目</button>
                <button>快速组队</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={'home-banner-box'}>
            <div
              className={'home-banner-box-img'}
              style={{
                backgroundImage: `url(${bgimg})`,
                backgroundSize: 'cover',
                backgroundPosition: '56%',
              }}
            >
              <p>近23万优秀开发者</p>
              <p>您的专属云端开发团队</p>
              <div className={'banner-button-group'}>
                <button>新建项目</button>
                <button>快速组队</button>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
