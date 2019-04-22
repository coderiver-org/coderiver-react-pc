import React, { useState } from 'react';
import { TimePicker as AntdTimePicker } from 'antd';
import moment from 'moment';
import style from './style.less';

const formater = 'HH:mm';

export default class TimePicker extends React.Component {
  state = {
    hourOpen: false,
    mintueOpen: false,
    time: this.props.value || null,
  };
  render() {
    const { hourOpen, mintueOpen, time } = this.state;
    const { className = '', suffixIcon, value, onChange, ...props } = this.props;


    const handleHourOpenChange = open => this.setState({ hourOpen: open });

    const handleHourChange = hour =>
      this.setState(state => ({
        time: state.time ? time.hours(hour.get('hour')) : moment().hours(hour.get('hour')),
        hourOpen: false,
        mintueOpen: true,
      }));

    const handleMintueChange = mintue => {
      const nowTime = mintue && time.set('m', mintue.get('m'));
      const nowTimeString = nowTime ? nowTime.format(formater) : '';
      onChange && onChange(nowTime, nowTimeString);
      this.setState({
        mintueOpen: false,
        time: nowTime
      })
    };
    return (
      <div id="time-picker" className={style.timePicker}>
        <AntdTimePicker
          allowClear={false}
          open={hourOpen}
          onOpenChange={handleHourOpenChange}
          value={value || time}
          onChange={handleHourChange}
          inputReadOnly
          placeholder="小时"
          suffixIcon={<div />}
          format={'HH'}
          className={style.hourPicker}
          getPopupContainer={trigger => document.getElementById('time-picker')}
        />
        <span className={style.break}>:</span>
        <AntdTimePicker
          open={mintueOpen}
          onOpenChange={handleHourOpenChange}
          value={value || time}
          onChange={handleMintueChange}
          inputReadOnly
          placeholder="分钟"
          suffixIcon={<div />}
          format={'mm'}
          className={style.mintuePicker}
          getPopupContainer={trigger => document.getElementById('time-picker')}
        />
      </div>
    );
  }
}
