import React from "react";
import styles from './Image.module.css'

const Image = ({ albumId, id, title, url, thumbnailUrl }) => {
  return (
    <div className={styles.card}>
      <div className={styles['img-container']}>
        <img src={thumbnailUrl} alt={title} />
      </div>
      <div className={styles.content}>
        <p className={styles.p}>{id}</p>
        <h3>{title}</h3>
        <a href={url}>Открыть изображение</a>
      </div>
    </div>
  );
};

export default Image;
