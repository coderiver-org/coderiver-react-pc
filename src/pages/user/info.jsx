import React from 'react';
import classNames from 'classnames';
import styles from './static/style.less';
import logo from './static/register-logo.png';
import StepOne from 'component/register/step-one';
import StepTwo from 'component/register/step-two';
import StepDot from 'component/register/step-dot';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stepCurrent: 0,
    };
  }
  chnageSetp = step => {
    this.setState({
      stepCurrent: step,
    });
  };
  render() {
    const styleContainer = classNames(
      styles['register-container'],
      styles['register-container-info']
    );

    const { stepCurrent } = this.state;

    return (
      <div className="safe-container">
        <section className={styleContainer}>
          <div className={styles['register-img']}>
            <img src={logo} alt="" />
          </div>
          <div className={styles['register-form']}>
            <StepDot current={stepCurrent} />
            <h1 className={styles.title}>欢迎加入Coderiver河码</h1>
            <p>快来完善个人资料吧！</p>
            {stepCurrent == 0 ? <StepOne chnageSetp={this.chnageSetp} /> : null}
            {stepCurrent == 1 ? <StepTwo chnageSetp={this.chnageSetp} /> : null}
          </div>
        </section>
      </div>
    );
  }
}
