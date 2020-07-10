import React from 'react';

import styles from './ImgBox.module.scss';

const ImgBox = ({ src, _classNameImg, _classNameBox }) => {
  return (
    <div className={`${styles.imgBox} ${_classNameBox}`}>
      <img
        className={`${styles.imgBox__img} ${_classNameImg}`}
        src={src}
        alt='product'
      />
    </div>
  );
};

export default React.memo(ImgBox);
