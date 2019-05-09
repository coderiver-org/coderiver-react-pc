import { connect } from 'dva'
import { Input, Button, Checkbox } from 'antd'
import styles from './style.less'

import logo from 'assets/images/login/logo.jpg'
import eyeOpen from 'assets/images/login/ic_eye_open.png'
import eyeClose from 'assets/images/login/eye_close.png'
import warn from 'assets/images/login/warn.png'

const Login = ({ dispatch, isShowPassword, isShowWarnMsg, username, password }) => (
  <div className={styles.container}>
    <div className={styles.content}>
      <div className={styles.logo}>
        <img src={logo} alt="" />
      </div>
      <h1 className={styles.title}>登录</h1>
      <p>还没有账户？<a href="/user/register">创建新账户</a></p>
      {
        isShowWarnMsg
          ? <div className={styles.errMsg}>
            <div>
              <img src={warn} alt="" />
            </div>
            <p>你输入的密码和账户名不匹配，是否忘记密码或忘记用户名？</p>
          </div>
          : ''
      }

      <div className={styles.form}>
        <div className={styles.formItem}>
          <p className={styles.label}>用户名</p>
          <Input placeholder="请输入用户名" value={username} onChange={e => dispatch({ type: 'login/changeUserName', e })} />
        </div>
        <div className={styles.formItem}>
          <div className={styles.label}>
            <p>密码</p>
            <img onClick={() => dispatch({ type: 'login/switchShowPassword' })} src={isShowPassword ? eyeClose : eyeOpen} alt="" />
          </div>
          <Input type={isShowPassword ? '' : 'password'} placeholder="请输入密码" value={password} onChange={e => dispatch({ type: 'login/changePassword', e })} />
        </div>
        <div className={styles.formItem}>
          <Button type="primary" className={styles.button} onClick={() => dispatch({ type: 'login/login' })}>登录</Button>
          <div className={styles.checkContent}>
            <Checkbox style={{ fontSize: '16px' }}>记住密码</Checkbox>
            <a href="/forget">忘记密码?</a>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.background} />
  </div>
)

function mapStateToProps(state) {
  return {
    username: state.login.username,
    password: state.login.password,
    isShowPassword: state.login.isShowPassword,
    isShowWarnMsg: state.login.isShowWarnMsg
  }
}

export default connect(mapStateToProps)(Login)
