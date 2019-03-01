import React from 'react';
import styles from './style.less';

export default function LoginLayout(props) {
  return (
    <article className={styles['cr-loginlayout']}>
      <section className={styles['cr-login-container']}>{props.children}</section>
    </article>
  );
}
