import React from 'react';
import styles from './styles.less';
import { Avatar } from 'antd';
import theme from 'src/theme';
const colorList = [theme['theme-color-2'], theme['theme-color-3'], theme['theme-color-4']];
export default function PersonCard({ data, current, onClick }) {
  const { img, name, job, description, id } = data;

  return (
    <div
      className={`${styles.personCard} ${data.id === current ? styles.currentCard : ''}`}
      onClick={() => onClick(id)}
    >
      {img ? (
        <Avatar size={60} src={img} />
      ) : (
        <Avatar
          size={60}
          style={{
            backgroundColor: colorList[Number.parseInt(Math.random() * 3, 10)],
            color: '#ffffff',
          }}
        >
          {name.slice(0, 1)}
        </Avatar>
      )}
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.job}>{job}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
}
