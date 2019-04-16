import React, { useState } from 'react';
import { TimePicker as AntdTimePicker } from 'antd';
import moment from 'moment';
import style from './style.less';

const formater = 'HH:mm'

export default function Pagination({ className = '', suffixIcon, value, onChange, ...props }) {

  const [hourOpen, setHourOpen] = useState(false);
  const [mintueOpen, setMintueOpen] = useState(false);
  const [time, setTime] = useState(value || null);

  const handleHourOpenChange = open => setHourOpen(open);

  const handleHourChange = hour => {
    setTime(time ? time.hours(hour.get('hour')): moment().hours(hour.get('hour')))
    setHourOpen(false)
    setMintueOpen(true)
  };

  const handleMintueChange = mintue => {
    setMintueOpen(false)
    const nowTime = mintue && time.set('m', mintue.get('m'))
    const nowTimeString =  nowTime ? nowTime.format(formater) : '';
    setTime(nowTime)
    onChange && onChange(nowTime, nowTimeString)
  }
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
