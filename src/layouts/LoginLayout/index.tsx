import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from './style.less';

export default function LoginLayout(props) {
  return (
    <article className={styles['cr-loginlayout']}>
      <Grid container spacing={0}>
        <Grid item xs={4} sm={5}>
          <section className={styles['cr-login-container']}>{props.children}</section>
        </Grid>
        <Grid item xs={8} sm={7}>
          <section className={styles['cr-login-bg']} />
        </Grid>
      </Grid>
    </article>
  );
}
