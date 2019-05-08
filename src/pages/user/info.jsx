import React from 'react';
import classNames from 'classnames';
import styles from './static/style.less';
import logo from './static/register-logo.png';
import StepOne from 'component/register/step-one';
import StepDot from 'component/register/step-dot';

export default class Index extends React.Component {
  render() {
    const styleContainer = classNames(
      styles['register-container'],
      styles['register-container-info']
    );
    return (
      <div className="safe-container">
        <section className={styleContainer}>
          <div className={styles['register-img']}>
            <img src={logo} alt="" />
          </div>
          <div className={styles['register-form']}>
            <StepDot />
            <h1 className={styles.title}>欢迎加入Coderiver河码</h1>
            <p>快来完善个人资料吧！</p>
            <StepOne />
          </div>
        </section>
      </div>
    );
  }
}
