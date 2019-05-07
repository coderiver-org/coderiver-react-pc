import React from 'react';
import styles from './style.less';
import { Form, Button } from 'antd';
import { Input } from 'component/common';
const Item = Form.Item;

@Form.create()
export default class Index extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }
      console.log('Received values of form: ', fieldsValue);
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const config = {
      rules: [{ required: true, message: '请输入!' }],
    };

    return (
      <Form layout="vertical" onSubmit={this.handleSubmit} className={styles['style-form']}>
        <Item label="邮箱或手机">{getFieldDecorator('user', config)(<Input />)}</Item>

        <Item label="用户名">{getFieldDecorator('user1', config)(<Input />)}</Item>

        <Item label="密码">{getFieldDecorator('user2', config)(<Input type="password" />)}</Item>

        <Item label="重复密码">
          {getFieldDecorator('user2', config)(<Input type="password" />)}
        </Item>

        <Item label="输入验证码">{getFieldDecorator('user2', config)(<Input />)}</Item>

        <Item>
          <Button type="primary" htmlType="submit">
            注册
          </Button>

          <Button>取消</Button>
        </Item>
      </Form>
    );
  }
}
