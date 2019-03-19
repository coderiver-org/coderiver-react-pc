import React, { Component } from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import styles from './style.less';

export default class Index extends Component {
  render() {
    const { label, type } = this.props;
    return (
      <div className={styles.crInput}>
        <h3 className={styles.label}>{label}</h3>
        <input type={type || 'text'} />
      </div>
    );
  }
}
