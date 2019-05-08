import React from 'react';
import styles from './style.less';
import { Input } from 'component/common';
import { Row, Col } from 'antd';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      captchaUrl: 'https://youtop-dsp.stnts.com/service/captcha',
    };
  }
  changeCaptcha = () => {
    const { captchaUrl } = this.state;
    this.setState({
      captchaUrl: `${captchaUrl}?${Math.random()}`,
    });
  };

  render() {
    const { captchaUrl } = this.state;
    return (
      <Row gutter={24} className={styles['register-container']}>
        <Col span={16}>
          <Input />
        </Col>

        <Col span={8}>
          <img onClick={this.changeCaptcha} className={styles['captcha']} src={captchaUrl} />
        </Col>
      </Row>
    );
  }
}
