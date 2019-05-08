import React, { Fragment, useEffect } from 'react';
import { connect } from 'dva';
import { Carousel } from 'antd';
import Header from 'component/common/BasicHeader';
import Footer from 'component/common/BasicFooter';
import Banner from 'component/home/Banner';
import Content from 'component/home/Content';
import Join from 'component/home/Join';
import styles from './styles.less';

function Home({ currentUser, dispatch, ...props }) {
  console.log(currentUser, props);
  useEffect(() => {
    // dispatch({
    //   type: 'user/fetchCurrent',
    // });
  }, [1]);
  return (
    <Fragment>
      <Header currentUser={currentUser} />
      <Banner />
      <Content
        type="project"
        title="优秀项目推荐"
        data={[
          {
            id: 1,
            img: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            name: '项目名称项目名称项目名称',
            description: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
          },
          {
            id: 2,
            img: '',
            name: '林峰',
            job: 'UI/UX资深设计师',
            description: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
          },
          {
            id: 3,
            img: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            name: 'Alex Lee',
            job: 'UI/UX资深设计师',
            description: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
          },
          {
            id: 4,
            img: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            name: 'Alex Lee',
            job: 'UI/UX资深设计师',
            description: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
          },
          {
            id: 5,
            img: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            name: 'Alex Lee',
            job: 'UI/UX资深设计师',
            description: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
          },
          {
            id: 6,
            img: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            name: 'Alex Lee',
            job: 'UI/UX资深设计师',
            description: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
          },
          {
            id: 7,
            img: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            name: 'Alex Lee',
            job: 'UI/UX资深设计师',
            description: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
          },
          {
            id: 8,
            img: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            name: 'Alex Lee',
            job: 'UI/UX资深设计师',
            description: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
          },
          {
            id: 9,
            img: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            name: 'Alex Lee',
            job: 'UI/UX资深设计师',
            description: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
          },
        ]}
      />
      <Content
        type="team"
        title="迅速加入团队"
        data={[
          {
            id: 1,
            img: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            name: '项目名称项目名称项目名称',
            description: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
          },
          {
            id: 2,
            img: '',
            name: '林峰',
            job: 'UI/UX资深设计师',
            description: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
          },
          {
            id: 3,
            img: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            name: 'Alex Lee',
            job: 'UI/UX资深设计师',
            description: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
          },
          {
            id: 4,
            img: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            name: 'Alex Lee',
            job: 'UI/UX资深设计师',
            description: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
          },
          {
            id: 5,
            img: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            name: 'Alex Lee',
            job: 'UI/UX资深设计师',
            description: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
          },
          {
            id: 6,
            img: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            name: 'Alex Lee',
            job: 'UI/UX资深设计师',
            description: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
          },
          {
            id: 7,
            img: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            name: 'Alex Lee',
            job: 'UI/UX资深设计师',
            description: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
          },
          {
            id: 8,
            img: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            name: 'Alex Lee',
            job: 'UI/UX资深设计师',
            description: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
          },
          {
            id: 9,
            img: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            name: 'Alex Lee',
            job: 'UI/UX资深设计师',
            description: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
          },
        ]}
      />
      <Content
        type="person"
        title="优秀人才"
        limit={8}
        data={[
          {
            id: 1,
            img: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            name: 'Alex Lee',
            job: 'UI/UX资深设计师',
            description: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
          },
          {
            id: 2,
            img: '',
            name: '林峰',
            job: 'UI/UX资深设计师',
            description: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
          },
          {
            id: 3,
            img: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            name: 'Alex Lee',
            job: 'UI/UX资深设计师',
            description: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
          },
          {
            id: 4,
            img: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            name: 'Alex Lee',
            job: 'UI/UX资深设计师',
            description: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
          },
          {
            id: 5,
            img: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            name: 'Alex Lee',
            job: 'UI/UX资深设计师',
            description: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
          },
          {
            id: 6,
            img: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            name: 'Alex Lee',
            job: 'UI/UX资深设计师',
            description: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
          },
          {
            id: 7,
            img: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            name: 'Alex Lee',
            job: 'UI/UX资深设计师',
            description: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
          },
          {
            id: 8,
            img: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            name: 'Alex Lee',
            job: 'UI/UX资深设计师',
            description: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
          },
          {
            id: 9,
            img: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            name: 'Alex Lee',
            job: 'UI/UX资深设计师',
            description: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
          },
        ]}
      />
      <Join />
      <Footer />
    </Fragment>
  );
}

export default connect(({ user }) => ({ currentUser: user.currentUser }))(Home);
