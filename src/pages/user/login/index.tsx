// import React, { Component } from 'react';

// import Input from 'component/user/Input';
// import Button from 'component/user/Button';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';

// import styles from '../style.less';
// export default class Index extends Component {
//   render() {
//     return (
//       <div className={styles.login}>
//         <div className={styles.logo} />
//         <h1 className={styles.title}>登录</h1>
//         <p className={styles.subTitle}>
//           还没有账户？<a className={styles.link}>创建新账户</a>
//         </p>
//         <Input label="用户名" />
//         <Input label="密码" type="password" />
//         <Button />
//         <div className={styles.loginFotter}>
//           <Checkbox value="checkedB" color="primary" />
//           <span className={styles.remberPwd}>记住密码</span>
//           <Link href={'dudUrl'} className={styles.link}>
//             忘记密码？
//           </Link>
//         </div>
//       </div>
//     );
//   }
// }

import React, { Component } from 'react';

import Input from 'component/user/Input';
import Button from 'component/user/Button';

import styles from '../style.less';
export default class Index extends Component {
  render() {
    return (
      <div className={styles.login}>
        <Button />
      </div>
    );
  }
}
