import React from 'react';

import styles from './MenuProductItem.module.scss';
import { ReactComponent as DeleteSvg } from '../../assets/icons/delete-24px.svg';

import ImgBox from '../img-box/ImgBox';

const MenuProductItem = ({ product }) => {
  const { img, company, name, price } = product;

  return (
    <section className={styles.product}>
      <ImgBox src={img} />
      <div>
        <p className={styles.product__name}>
          {company} - {name}
        </p>
        <p className={styles.product__price}>${price.toFixed(2)}</p>
      </div>
      <DeleteSvg className={styles.icon} />
    </section>
  );
};

export default MenuProductItem;
