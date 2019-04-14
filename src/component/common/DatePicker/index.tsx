import React, { useState } from 'react';
import { DatePicker as AntdDatePicker, Input } from 'antd';
import style from './style.less';

const { MonthPicker: AntdMonthPicker } = AntdDatePicker;

export default function Pagination({ className = '', suffixIcon, ...props }) {
  const handleChange = e => console.log(e);
  const [open, setOpen] = useState(false);
  return (
    <div id="date-picker" className={style.datePicker}>
      <div className={style.month} onClick={() => setOpen(!open)}>div</div>
      <div className={style.year} onClick={() => setOpen(!open)}>div</div>
      <AntdMonthPicker
        // {...props}/
        // mode="year"
        // popupStyle={{top:"0px"}}
        // open={open}
        onChange={handleChange}
        // suffixIcon={<div />}
        // style={{ display:"none" }}
        // getCalendarContainer={(...res) => document.getElementById("date-picker")}
      />
    </div>
  );
}
