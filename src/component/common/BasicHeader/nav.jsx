import React from 'react';
import { Menu } from 'antd';

const MenuItem = Menu.Item;

import styles from './index.less';

// export default function Nav({ onClick, current, className }) {
//   return (
//     <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" className={className}>
//       <MenuItem key="home">首页</MenuItem>
//       <MenuItem key="project-center">项目中心</MenuItem>
//       <MenuItem key="talent-plaza">人才广场</MenuItem>
//     </Menu>
//   );

// }
export default function Nav({ onClick, current, className }) {
  const handleClick = (e, key) => {
    e.key = key;
    onClick(e)
  }
  return (
    <ul className={styles.nav}>
      <li onClick={e => handleClick(e, 'home')}>首页</li>
      <li onClick={e => handleClick(e, 'project-center')}>项目中心</li>
      <li onClick={e => handleClick(e, 'talent-plaza')}>人才广场</li>
    </ul>
  );
}
