import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import styles from './BtnScrollTop.module.scss';

import { ReactComponent as ArrowUpSvg } from '../../assets/icons/keyboard_arrow_up-24px.svg';

const BtnScrollTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (!showButton && window.pageYOffset > 300) {
        setShowButton(true);
      } else if (showButton && window.pageYOffset <= 300) {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', checkScroll);
  }, [showButton]);

  return (
    <Link
      to='#header-main'
      className={
        !showButton
          ? `${styles.btnScrollTop}`
          : `${styles.btnScrollTop} ${styles.slideUpAnimation}`
      }
      smooth
    >
      <ArrowUpSvg className={styles.icon} />
    </Link>
  );
};

export default BtnScrollTop;
