import { useState } from 'react'
import { connect } from 'dva'
import Input from './component/Input';
import Button from './component/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';

import styles from '../style.less';
function Index({ dispatch }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    dispatch({
      type: 'login/login',
      payload: {
        username,
        password
      }
    })
  }

  return (
    <div className={styles.login}>
      <div className={styles.logo} />
      <h1 className={styles.title}>登录</h1>
      <p className={styles.subTitle}>
        <span>还没有账户？</span>
        <a className={styles.link}>创建新账户</a>
      </p>
      <Input label="用户名" value={username} onInput={e => setUsername(e.target.value)} />
      <Input label="密码" type="password" value={password} onInput={e => setPassword(e.target.value)} />
      <Button onClick={handleSubmit} />
      <div className={styles.loginFotter}>
        <Checkbox value="checkedB" color="primary" />
        <span className={styles.remberPwd}>记住密码</span>
        <Link href={'dudUrl'} className={styles.link}>
          忘记密码？
        </Link>
      </div>
    </div>
  )
}

export default connect()(Index)
