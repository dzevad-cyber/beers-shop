import React from 'react';

import styles from './ImgBox.module.scss';

const ImgBox = ({ src, className }) => {
  return (
    <div className={`${styles.imgBox} ${className}`}>
      <img className={styles.imgBox__img} src={src} alt='product' />
    </div>
  );
};

export default React.memo(ImgBox);
