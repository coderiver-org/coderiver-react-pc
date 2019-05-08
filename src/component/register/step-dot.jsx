import React from 'react';
import { Badge, Row, Col } from 'antd';
import styles from './style.less';

export default class Index extends React.Component {
  render() {
    return (
      <div className={styles['step-dot']}>
        <Row gutter={24}>
          <Col span={8}>
            <Badge dot color="#107c88" />
          </Col>

          <Col span={8}>
            <Badge dot color="#d0d0d0" />
          </Col>

          <Col span={8}>
            <Badge dot color="#d0d0d0" />
          </Col>
        </Row>
      </div>
    );
  }
}
