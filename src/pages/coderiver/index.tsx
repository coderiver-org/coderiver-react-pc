import React, { Component, ReactNode } from 'react';
import HomeTitle from 'component/home/HomeTitle';
import Banner from 'src/component/home/Banner';
import ExcellentProject from 'src/component/home/ExcellentProject';
import CodeRiverDownload from 'src/component/home/Download';

export default class Home extends Component {
  render(): ReactNode {
    return (
      <div>
        <Banner />
        <ExcellentProject />
        <HomeTitle title={'快速加入团队'} path={'/'} />
        <HomeTitle title={'优秀程序员'} path={'/'} />
        <HomeTitle title={'优秀设计师'} path={'/'} />
        <CodeRiverDownload />
      </div>
    );
  }
}

// export default function Home() {
//   const [abc, setAbc] = React.useState('00000');
//   return (
//     <div>
//       <div>{abc}</div>
//       <img style={{ width: '100%' }} src={bgimg} alt="" />
//       <HomeTitle title={'优秀项目推荐'} path={'/'} color={'yellowgreen'} />
//       <HomeTitle title={'快速加入团队'} path={'/'} />
//       <HomeTitle title={'优秀程序员'} path={'/'} />
//       <HomeTitle title={'优秀设计师'} path={'/'} />
//       <HomeTitle title={'下载移动端'} path={'/'} />
//     </div>
//   );
// }
