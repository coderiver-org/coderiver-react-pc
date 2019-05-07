import React, { useState } from 'react';
import styles from './styles.less';

import PersonCard from './PersonCard';
import ProjectCard from './ProjectCard';

export default function Content({ title, type, children, limit = 3, data = [] }) {
  const [current, setCurrent] = useState('');

  const handleClick = id => setCurrent(id);

  const dataLength = data.length;

  const Card = type === 'person' ? PersonCard : ProjectCard;

  return (
    <div className={styles.content}>
      <div className="inner">
        <div className={`${styles.title} ${styles[type]}`}>
          <span>{title}</span>
        </div>
        <div className={styles.cards}>
          {data.slice(0, limit).map(item => (
            <Card key={item.id} data={item} current={current} onClick={handleClick} />
          ))}
        </div>
        {dataLength > limit ? <div className={styles.more}>查看更多</div> : null}
      </div>
    </div>
  );
}
