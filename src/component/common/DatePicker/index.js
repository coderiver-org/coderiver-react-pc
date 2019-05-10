import React, { Component } from 'react';
import { DatePicker as AntdDatePicker } from 'antd';
import style from './style.less';

const { MonthPicker: AntdMonthPicker } = AntdDatePicker;

export default class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      date: null,
    };
  }

  static getDerivedStateFromProps(nextProps, preState) {
    if (typeof nextProps.value === 'object') {
      return {
        date: nextProps.value,
      };
    }
    return null;
  }

  handleChange = (date, dateString) => {
    const { onChange } = this.props;
    this.setState({ open: false });
    onChange ? onChange(date, dateString) : this.setState({ date });
  };

  handleOpenChange = open => this.setState({ open });

  render() {
    const { className = '', suffixIcon, value, onChange, ...props } = this.props;
    let { open, date } = this.state;
    return (
      <div id="date-picker" className={style.datePicker}>
        <AntdMonthPicker
          placeholder=""
          allowClear={false}
          open={open}
          value={date}
          onChange={this.handleChange}
          suffixIcon={<div />}
          format={'MM'}
          className={style.year}
          getCalendarContainer={trigger => document.getElementById('date-picker')}
          onOpenChange={this.handleOpenChange}
        />
        <AntdMonthPicker
          allowClear={true}
          placeholder=""
          open={false}
          value={date}
          onChange={this.handleChange}
          suffixIcon={<div />}
          format={'YYYY'}
          className={style.month}
          onOpenChange={this.handleOpenChange}
          getCalendarContainer={trigger => document.getElementById('date-picker')}
        />
      </div>
    );
  }
}
