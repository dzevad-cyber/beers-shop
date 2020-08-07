import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { productAdded, cartPriceCalculated } from '../../store/cartSlice';
import { Link } from 'react-router-dom';

import styles from './ProductPage.module.scss';

import ImgBox from '../../components/img-box/ImgBox';
import Counter from '../../components/counter/Counter';
import {
  selectProduct,
  selectRelatedProducts,
} from '../../store/productsSlice';

import {
  selectProductFromCart,
  selectCartTotalPrice,
  selectCartTotalItems,
  cartItemsCalculated,
} from '../../store/cartSlice';

import BtnAddToCart from '../../components/btn-add-to-cart/BtnAddToCart';
import RelatedProducts from '../../components/related-products/RelatedProducts';
import ProductsList from '../../components/products-list/ProductsList';
import Product from '../../components/product/Product';
import Backdrop from '../../componenst/backdrop/Backdrop';
import ProductAddedCard from '../../components/products-added-card/ProductAddedCard';

const ProductPage = () => {
  const { id } = useParams();
  const product = useSelector(selectProduct(id));
  const productFromCart = useSelector(selectProductFromCart(id));
  const relatedProducts = useSelector(selectRelatedProducts(id));
  const cartTotalItems = useSelector(selectCartTotalItems);
  const cartTotalPrice = useSelector(selectCartTotalPrice);
  const dispatch = useDispatch();

  const [count, setCount] = useState(1);
  const [toggleBackdrop, setToggleBackdrop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const onDecrementCount = () => {
    if (count > 1) setCount(count - 1);
  };

  const onIncrementCount = () => setCount(count + 1);

  const btnSetToggleBackdrop = () => setToggleBackdrop(!toggleBackdrop);

  const { img, company, name, abv, wort, ibu, bottle, price } = product;
  return (
    <section className={styles.productPage}>
      <ImgBox src={img} _classNameImg={styles.productPage__img} />
      <section className={styles.productPage__info}>
        <h4 className={styles.productPage__name}>
          {company} - {name}
        </h4>
        <h5 className={styles.productPage__price}>${price}</h5>
        <section className={styles.productPage__ingredients}>
          <p>ABV: {abv}</p>
          <p>WORT: {wort}%</p>
          <p>IBU: {ibu}</p>
          <p>Bottle: {bottle}</p>
        </section>
        <div className={styles.productPage__addToCartBox}>
          <Counter
            onIncrementCount={onIncrementCount}
            onDecrementCount={onDecrementCount}
            count={count}
          />
          <BtnAddToCart
            _onClick={() => {
              dispatch(productAdded({ ...product, count }));
              dispatch(cartPriceCalculated());
              dispatch(cartItemsCalculated());
              setToggleBackdrop(!toggleBackdrop);
            }}
          />
        </div>

        <p className={styles.productPage__text}>
          We are proud to present our best premium Shopify theme - Wokiee.
        </p>
        <p className={styles.productPage__text}>
          This is multi-purpose software that can be used for any type of the
          store. Great variety of available options will make customization
          process very easy.
        </p>
        <p className={styles.productPage__text}>
          Please, take a look at feature list and compare with our competitors.
        </p>
      </section>
      <RelatedProducts _className={styles.relatedProducts}>
        <h3 className={styles.relatedProducts__title}>related products</h3>
        <ProductsList _className={styles.productsList}>
          {relatedProducts &&
            relatedProducts.map((product, index) => (
              <Link
                key={index}
                to={`/product/${product.id}`}
                className={styles.productBox}
              >
                <Product product={product} />
              </Link>
            ))}
        </ProductsList>
      </RelatedProducts>
      {toggleBackdrop && (
        <Backdrop>
          <ProductAddedCard
            product={productFromCart}
            cartTotalItems={cartTotalItems}
            cartTotalPrice={cartTotalPrice}
            setToggleBackdrop={btnSetToggleBackdrop}
          />
        </Backdrop>
      )}
    </section>
  );
};

export default ProductPage;
