import styles from './BasicLayout.less';
import { ComProps } from '../type/displayType';

// const styles = require('./BasicLayout');

export default function BasicLayout(props: ComProps) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to umi!</h1>
      {props.children}
    </div>
  );
}
