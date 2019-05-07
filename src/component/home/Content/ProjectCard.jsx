import React from 'react';
import styles from './styles.less';
import theme from 'src/theme';

const colorList = [theme['theme-color-2'], theme['theme-color-3'], theme['theme-color-4']];

export default function ProjectCard({ data, current, onClick }) {
  const { img, name, job, description, id } = data,
    handleClick = e => {
      onClick(e);
    },
    style = img
      ? { backgroundImage: `url(${img})` }
      : { backgroundColor: colorList[Number.parseInt(Math.random() * 3, 10)] };
  return (
    <div className={styles.projectCard} onClick={handleClick}>
      <div className={img ? styles.image : styles.defaultImage} style={style} />
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>

        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
}
