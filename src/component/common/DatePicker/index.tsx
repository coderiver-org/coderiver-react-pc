import React, { Component } from 'react';
import { DatePicker as AntdDatePicker } from 'antd';
import style from './style.less';

const { MonthPicker: AntdMonthPicker } = AntdDatePicker;

const formater = 'YYYY-MM';

export default class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      date: null,
    };
  }
  handleChange = (date, dateString) => {
    const { onChange } = this.props;
    this.setState({
      date,
      open: false,
    });
    onChange && onChange(date, dateString);
  };
  render() {
    const { className = '', suffixIcon, value, onChange, ...props } = this.props;
    const { open, date } = this.state;
    const currentDate = value || date;
    const [year, month] = currentDate ? currentDate.format(formater).split('-') : [null, null];

    return (
      <div id="date-picker" className={style.datePicker}>
        <AntdMonthPicker
          allowClear={false}
          open={open}
          value={value || date}
          onChange={this.handleChange}
          suffixIcon={<div />}
          format={'YYYY-MM'}
          className={style.AntdMonthPicker}
          getCalendarContainer={trigger => document.getElementById('date-picker')}
          {...props}
        />
        <div className={style.fakePicker}>
          <div
            className={style.month}
            onClick={() => this.setState(state => ({ open: !state.open }))}
            onBlur={() => {
              console.log(1);
            }}
          >
            {month ? Number.parseInt(month) + '月' : null}
          </div>
          <div
            className={style.year}
            onClick={() => this.setState(state => ({ open: !state.open }))}
          >
            {year}
          </div>
        </div>
      </div>
    );
  }
}
