import React, { Component } from 'react';
import styles from './index.less';
import logo from 'assets/images/home/logo@2x.png';
import android from 'assets/images/home/android@2x.png';
import ios from 'assets/images/home/ios@2x.png';
import github from 'assets/images/home/Github@2x.png';
import wbicon from 'assets/images/home/wb-icon@2x.png';
import wxicon from 'assets/images/home/wx-icon@2x.png';

export default class BasicFooter extends Component {
  render() {
    return (
      <footer className={styles['cr-footer']}>
        <div className={'cr-footer-left'}>
          <div className={'cr-footer-logo'}>
            <img src={logo} alt="" />
          </div>
          <p>
            CodeRiver河码专注于IT行业，是集教，学，研，实战，公益为一体的综合社区。目前分为五大生态群：
          </p>
          <p>CodeRiver开源：致力于打造全平台精品开源项目。</p>
          <p>CodeRiver协作平台：程序员、设计师、产品经理等IT从业者的项目协作平台。</p>
          <p>CodeRiver学院：提供多种形式的热门技术学习资源，免费专业的职业拓展平台。</p>
          <p>CodeRiver公益：以推动技术公益事业发展，为公益团队免费开发项目。</p>
          <p>CodeRiver&copy;2018</p>
        </div>
        <div className={'cr-footer-right'}>
          <div className={'cr-friendly-link-title'}>友情链接</div>
          <div className={'cr-friendly-link'}>
            <ul>
              <li>优设网</li>
              <li>优优教程网</li>
              <li>BootStrap中文网</li>
              <li>GitHub</li>
              <li>UI中国</li>
            </ul>
            <div style={{ clear: 'both' }} />
          </div>
          <div className={'cr-friendly-link-logo'}>
            <div style={{ margin: '40px 0' }}>
              <img style={{ width: 140, marginRight: 10 }} src={android} alt="" />
              <img style={{ width: 100 }} src={ios} alt="" />
            </div>
            <div>
              <img style={{ width: 28, margin: '0 15px' }} src={github} alt="" />
              <img style={{ width: 28, margin: '0 15px' }} src={wbicon} alt="" />
              <img style={{ width: 28, margin: '0 15px' }} src={wxicon} alt="" />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
