import React, { useState } from 'react';
import { Button } from 'antd';
import Pagination from 'component/common/Pagination';
import Tag from 'component/common/Tag';
import Modal from 'component/common/Modal';
import DatePicker from 'component/common/DatePicker';
import TimePicker from 'component/common/TimePicker';

export default function index() {
  // tag
  function log(e) {
    console.log(e);
  }

  function preventDefault(e) {
    e.preventDefault();
    console.log('Clicked! But prevent default.');
  }
  // Modal
  const [modalVisible, setModalVisible] = useState(false);
  // datepicker
  const [date, setDate] = useState(null);
  // timepicker
  const [time, setTime] = useState(null);
  return (
    <>
      <div>
        <div>Pagination</div>
        <Pagination total={500} />
      </div>
      <div>
        <div>tag</div>
        <Tag>Tag 1</Tag>
        <Tag>
          <a href="https://github.com/ant-design/ant-design/issues/1862">Link</a>
        </Tag>
        <Tag closable onClose={log}>
          Tag 2
        </Tag>
        <Tag closable onClose={preventDefault}>
          Prevent Default
        </Tag>
      </div>
      <div>
        <div>modal</div>

        <Button type="primary" onClick={() => setModalVisible(true)}>
          Open Modal
        </Button>
        <Modal
          title={<div>{'<-'}</div>}
          visible={modalVisible}
          // onOk={this.handleOk}
          onCancel={() => setModalVisible(false)}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
      <div>
        <div>datepicker</div>
        <DatePicker value={date} onChange={date => setDate(date)} />
      </div>
      <div>
        <div>TimePicker</div>
        <TimePicker value={time} onChange={(time, timeString) => setTime(time)} />
      </div>
    </>
  );
}
