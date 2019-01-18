import React from 'react';
import Sign from 'component/user/Sign'
import RegisterForm from './form'

export default class Index extends React.Component<Props, State> {
  render() {
    const { classes } = this.props;
    const header = '欢迎加入CodeRiver'
    const footer = (
      <span>已有账号？<a href="#">登录</a></span>
    )
    return (
      <Sign
        header={header}
        footer={footer}>
        <RegisterForm />
      </Sign>
    )
  }
}
