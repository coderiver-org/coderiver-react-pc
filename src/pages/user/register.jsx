import React from 'react';
import styles from './static/style.less';
import logo from './static/register-logo.png';
import FormRegister from 'component/register/form';

export default class Index extends React.Component {
  render() {
    return (
      <div className="safe-container">
        <section className={styles['register-container']}>
          <div className={styles['register-img']}>
            <img src={logo} alt="" />
          </div>
          <div className={styles['register-form']}>
            <h1 className={styles.title}>加入河码，发现更大的开源世界！</h1>
            <FormRegister />
          </div>
        </section>
      </div>
    );
  }
}
