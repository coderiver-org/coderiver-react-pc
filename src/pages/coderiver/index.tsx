import React, { Component, ReactNode } from 'react';
import HomeTitle from 'component/home/HomeTitle';
import bgimg from 'assets/images/home/bg@2x(1).png';

export default class Home extends Component {
  render(): ReactNode {
    return (
      <div>
        <img style={{ width: '100%' }} src={bgimg} alt="" />
        <HomeTitle title={'优秀项目推荐'} path={'/'} color={'yellowgreen'} />
        <HomeTitle title={'快速加入团队'} path={'/'} />
        <HomeTitle title={'优秀程序员'} path={'/'} />
        <HomeTitle title={'优秀设计师'} path={'/'} />
        <HomeTitle title={'下载移动端'} path={'/'} />
      </div>
    );
  }
}
