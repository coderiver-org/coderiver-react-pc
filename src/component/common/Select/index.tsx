import React, { Component } from 'react';

import styles from './index.less';
import { Select } from 'antd';
const Option = Select.Option;

export default class Index extends Component {
  render() {
    return (
      <div className={styles['select-container']}>
        <Select showSearch placeholder="请选择角色" {...this.props}>
          <Option value="jack">设计师</Option>
          <Option value="lucy">程序员</Option>
          <Option value="tom">阿拉丁</Option>
        </Select>
      </div>
    );
  }
}
