import React from 'react'
import styles from '../style.less';

function Index({ label, type = 'text', value, onInput }) {

  return (
    <div className={styles.crInput}>
      <h3 className={styles.label}>{label}</h3>
      <input type={type} value={value} onChange={onInput} />
    </div>
  )
}

export default Index
