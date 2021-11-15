import React from 'react';
import s from './listingItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDollarSign,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

export const ListingItem = ({
  item: { id, image, title, description, price, amount },
  viewStatus,
  addToCart,
}) => {
  return (
    <div className={`${s.productItem} bg-black`}>
      <Link to={`/products/${id}`}>
        <div className={`${s.image} ${amount === 0 && s.imageNodata}`}>
          <img src={image} alt="img" />
        </div>
      </Link>

      <div className={s.body}>
        <Link to={`/products/${id}`}>
          <div className={s.title}>{title}</div>
        </Link>
        {viewStatus === 'list' && (
          <div className={s.description}>{description}</div>
        )}
        <div className={s.price}>{price + '$'}</div>
        <Button
          className={s.addToCart}
          color={'#E3AB37'}
          Icon={() => (
            <FontAwesomeIcon color={'#fafafa'} icon={faShoppingCart} />
          )}
          onClick={addToCart}
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
