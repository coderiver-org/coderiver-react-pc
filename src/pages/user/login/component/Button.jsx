import Button from '@material-ui/core/Button';
import styles from '../style.less';

function Index({ onClick }) {
  return (
    <Button
      variant="contained"
      className={styles.crButton}
      onClick={onClick}
    >
      登录
    </Button>
)}

export default Index
