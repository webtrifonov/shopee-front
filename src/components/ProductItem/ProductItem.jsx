import React from 'react';
import s from './ProductItem.module.scss';
import Button from '../Button/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDollarSign, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {useSelector} from 'react-redux';

const ProductItem = ({item: {image, title, description, price}, viewStatus}) => {

  return (
    <div className={`${s.productItem} bg-black ${viewStatus === 'grid' && s.productItemGrid}`}>
      <div className={s.image}>
        <img src={image} alt="img" />
      </div>
      <div className={s.body}>
        <div className={s.title}>{title}</div>
        {viewStatus === 'list' && <div className={s.description}>{description}</div>}
        <div className={s.price}>{price + '$'}</div>
        <Button
          className={s.addToCart}
          color={'#E3AB37'}
          Icon={() => <FontAwesomeIcon color={'#fafafa'} icon={faShoppingCart} />}
        >
          Add to Cart!!!
        </Button>
        <Button
          className={s.buyNow}
          color={'#2A9A38'}
          Icon={() => <FontAwesomeIcon color={'#fafafa'} icon={faDollarSign} />}
        >
          Buy now!!!
        </Button>

      </div>
    </div>
  );
};

export default ProductItem;
