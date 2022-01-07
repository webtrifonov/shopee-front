import React from 'react';
import s from './listingItem.module.scss';
import { Link } from 'react-router-dom';

export const ListingItem = ({
  item: { id, image, title, description, price, amount },
  viewStatus,
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
        <div className={s.price}>[TODO AMOUNT]</div>
      </div>
    </div>
  );
};
