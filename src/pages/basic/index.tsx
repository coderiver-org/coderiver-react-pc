import React, { Component } from 'react';
import { Card } from 'antd';
import { connect } from 'dva';
import * as styles from './static/style.less';

import Empty from 'component/common/Empty';
import Avatar from 'component/common/Avatar';
import Input from 'component/common/Input';
import Popover from 'component/common/Popover';
import Tab from 'component/common/Tab';
import Select from 'component/common/Select';

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

        <Card title="Empty数据为空时显示的组件Task">
          <Avatar />
        </Card>

        <Card title="Empty数据为空时显示的组件Task">
          <Input />
        </Card>

        <Card title="Empty数据为空时显示的组件Task">
          <Popover />
        </Card>

        <Card title="Empty数据为空时显示的组件Task">
          <Tab />
        </Card>

        <Card title="Empty数据为空时显示的组件Task">
          <Select />
        </Card>
      </div>
    );
  }
}
