import React from 'react';
import router from 'umi/router';
import styles from './index.less';

type HomeTitleProps = {
  title: string;
  path?: string;
  color?: string;
};

export default function(props: HomeTitleProps) {
  return (
    <div
      className={styles['cr-home-title']}
      style={{ borderTop: `4px solid ${props.color ? props.color : '#40aea8'}` }}
    >
      <div className={'cr-home-title-text'}>{props.title}</div>
      <div className={'cr-home-title-more'}>
        <span
          onClick={() => {
            router.push(props.path);
          }}
        >
          {props.path ? '查看更多' : ''}
        </span>
      </div>
    </div>
  );
}
