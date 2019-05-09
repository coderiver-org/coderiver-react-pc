import React from 'react';
import { Popover, Badge, Icon, Tabs } from 'antd';
import styles from './index.less';

const { TabPane } = Tabs;
export default function Notice(props) {
  const trigger = (
    <Badge count={12} style={{ boxShadow: 'none' }} className={styles.badge}>
      <Icon type="bell" className={styles.icon} />
    </Badge>
  );
  const notificationBox = () => {
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="tab 1" key="1">1</TabPane>
        <TabPane tab="tab 2" key="2">2</TabPane>
        <TabPane tab="tab 3" key="3">3</TabPane>
      </Tabs>
    );
  };
  return (
    <Popover
      content={notificationBox()}
      overlayClassName={styles.popover}
      trigger="click"
      placement="bottomRight"
    >
      {trigger}
    </Popover>
  );
}
