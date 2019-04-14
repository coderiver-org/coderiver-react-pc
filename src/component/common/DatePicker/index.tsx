import React, { useState } from 'react';
import { DatePicker as AntdDatePicker, Input } from 'antd';
import style from './style.less';

const { MonthPicker: AntdMonthPicker } = AntdDatePicker;

export default function Pagination({ className = '', suffixIcon, ...props }) {
  const [open, setOpen] = useState(false);
  const [dateString, setDateString] = useState('');
  const handleChange = (moment, dateString) => {
    setDateString(dateString);
    setOpen(false);
  };
  const [year, month] = dateString.split('-');
  return (
    <div id="date-picker" className={style.datePicker}>
      <AntdMonthPicker
        {...props}
        open={open}
        onChange={handleChange}
        suffixIcon={<div />}
        format={'YYYY-MM'}
        className={style.AntdMonthPicker}
        getCalendarContainer={trigger => trigger.parentNode.parentNode}
      />
      <div className={style.fakePicker}>
        <div className={style.month} onClick={() => setOpen(!open)} onBlur={() => {
          console.log(1) 
        }}>
          {month ? (Number.parseInt(month) + '月'): null}
        </div>
        <div className={style.year} onClick={() => setOpen(!open)}>
          {year}
        </div>
      </div>
    </div>
  );
}
