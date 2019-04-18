import React, { useState } from 'react';
import { DatePicker as AntdDatePicker } from 'antd';
import style from './style.less';

const { MonthPicker: AntdMonthPicker } = AntdDatePicker;

const formater = 'YYYY-MM';

export default function Pagination({ className = '', suffixIcon, value, onChange, ...props }) {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(value || null);

  const handleChange = (date, dateString) => {
    setDate(date);
    onChange && onChange(date, dateString);
    setOpen(false);
  };
  const currentDate = value || date;
  const [year, month] = currentDate ? currentDate.format(formater).split('-') : [null, null];
  return (
    <div id="date-picker" className={style.datePicker}>
      <AntdMonthPicker
        allowClear={false}
        open={open}
        value={value || date}
        onChange={handleChange}
        suffixIcon={<div />}
        format={'YYYY-MM'}
        className={style.AntdMonthPicker}
        getCalendarContainer={trigger => document.getElementById('date-picker')}
        {...props}
      />
      <div className={style.fakePicker}>
        <div
          className={style.month}
          onClick={() => setOpen(!open)}
          onBlur={() => {
            console.log(1);
          }}
        >
          {month ? Number.parseInt(month) + '月' : null}
        </div>
        <div className={style.year} onClick={() => setOpen(!open)}>
          {year}
        </div>
      </div>
    </div>
  );
}
