import styles from '../BasicLayout/index.less';
import { ComProps } from '../../type/common';
// import MuiThemeProvider from 'material-ui'

// const styles = require('./Index');

export default function Index(props: ComProps) {
  return <div className={styles.normal}>{props.children}</div>;
}
