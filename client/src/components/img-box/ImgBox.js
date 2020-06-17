import React from 'react';

import styles from './ImgBox.module.scss';

const ImgBox = ({ src, customStyle }) => {
  return (
    <div className={`${styles.imgBox} ${customStyle}`}>
      <img className={styles.imgBox__img} src={src} alt='product image' />
    </div>
  );
};

export default ImgBox;
