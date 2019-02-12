import styles from './index.less';
import { ComProps } from 'src/type/common';
import BasicHeader from 'component/common/BasicHeader/';
import BasicFooter from 'component/common/BasicFooter/';

export default function Index(props: ComProps) {
  return (
    <section className={styles['cr-base']}>
      <BasicHeader />
      <div className={'cr-main'}>
        {props.children}
        <BasicFooter />
      </div>
    </section>
  );
}
