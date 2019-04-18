import React, { Component } from 'react';
import styles from './index.less';
import { Avatar } from 'antd';

export default class BasicHeader extends Component {
  render() {
    return (
      <div className={styles['avatar-contanier']}>
        <Avatar />
        <Avatar icon="user" />
        <Avatar size="large">U</Avatar>
        <Avatar>USER</Avatar>
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
        <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
      </div>
    );
  }
}
