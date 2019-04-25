import React, { Component } from 'react';
import { Card, Button, Tabs } from 'antd';
import { connect } from 'dva';
import * as styles from './static/style.less';

import Empty from 'component/common/Empty';
import Avatar from 'component/common/Avatar';
import Input from 'component/common/Input';
import Popover from 'component/common/Popover';
import Select from 'component/common/Select';

const { TabPane } = Tabs

@connect(({ displayModel }) => ({
  displayModel,
}))
export default class Display extends Component<any> {
  componentDidMount() {}

  render() {
    return (
      <div className={styles['basic-components']}>
        <Card title="Empty数据为空时显示的组件Task">
          <Empty />
        </Card>

        <Card title="avatar头像">
          <Avatar />
        </Card>

        <Card title="popover气泡卡片">
          <Popover />
        </Card>

        <Card title="select下拉列表">
          <Select />
        </Card>

        <Card title=" input输入框">
          <Input />
        </Card>

        <Card title="Button 按钮">
          <Button type="primary" style={{marginRight: '8px'}}>确定</Button>
          <Button>取消</Button>
        </Card>

        <Card title="Tabs 标签页">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
          <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
          <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
        </Tabs>
        </Card>
      </div>
    );
  }
}
