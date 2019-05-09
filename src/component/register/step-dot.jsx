import React from 'react';
import { Badge, Row, Col } from 'antd';
import styles from './style.less';

export default class Index extends React.Component {
  render() {
    const { current } = this.props;
    const activeColor = '#107c88';
    const unActiveColor = '#d0d0d0';
    return (
      <div className={styles['step-dot']}>
        <Row gutter={24}>
          {[0, 1, 2].map(i => (
            <Col span={8} key={i}>
              <Badge dot color={i == (current || 0) ? activeColor : unActiveColor} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}
