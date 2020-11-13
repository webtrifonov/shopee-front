import React from 'react';
import { useDispatch } from 'react-redux';
import s from './ProductItem.module.scss';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDollarSign,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { openModal } from '../../modules/BaseModal/baseModalActions';

const ProductItem = ({
  item: { image, title, description, price, amount },
  viewStatus,
}) => {
  const dispatch = useDispatch();
  const addToCart = (event) => {
    console.log(event);
    dispatch(
      openModal({
        Content: {
          title: 'qwe',
          message: 'asd',
        },
      })
    );
  };

  return (
    <div className={`${s.productItem} bg-black`}>
      <div className={`${s.image} ${amount === 0 && s.imageNodata}`}>
        <img src={image} alt="img" />
      </div>
      <div className={s.body}>
        <div className={s.title}>{title}</div>
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

export default ProductItem;
