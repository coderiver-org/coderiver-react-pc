import React from 'react';
import styles from './style.less';
import { Form, Button, Row, Col } from 'antd';
import { Input, Select } from 'component/common';
const Item = Form.Item;

@Form.create()
export default class Index extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }
      this.props.chnageSetp(1);
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
        <Item label="选择角色">{getFieldDecorator('user', config)(<Select />)}</Item>

        <Item label="工作经验">{getFieldDecorator('user1', config)(<Select />)}</Item>

        <Row gutter={6} className={styles['btn-group']}>
          <Col span={8}>
            <Button type="primary" htmlType="submit">
              继续
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}
