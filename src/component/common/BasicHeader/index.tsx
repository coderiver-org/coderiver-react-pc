import React, { Component } from 'react';
import styles from './index.less';
import { Menu, Icon } from 'antd';
import logo from 'assets/images/home/logo@2x.png';
import router from 'umi/router';

export default class BasicHeader extends Component {
  state = {
    current: 'home',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    const Nav = props => (
      <Menu onClick={props.handleClick} selectedKeys={[props.current]} mode="horizontal">
        <Menu.Item key="home">首页</Menu.Item>
        <Menu.Item key="project-center">项目中心</Menu.Item>
        <Menu.Item key="talent-plaza">人才广场</Menu.Item>
      </Menu>
    );
    return (
      <header className={styles['cr-header']}>
        <div className={'cr-logo'}>
          <img src={logo} alt="" />
        </div>
        <div className={'cr-nav'}>
          <Nav handleClick={this.handleClick} current={this.state.current} />
        </div>
        <div className={'cr-user'}>
          <Icon type="search" />
          <span
            onClick={() => {
              router.push('/user');
            }}
          >
            登录
          </span>
          <span
            onClick={() => {
              router.push('/user');
            }}
          >
            注册
          </span>
        </div>
      </header>
    );
  }
}
