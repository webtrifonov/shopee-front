import React from 'react';
import s from './cart.module.scss';
import Title from './components/Title/Title';
import { CartItems } from '../../modules/CartItems';

export const CartPage = () => {
  return (
    <div className={s.mainContainer}>
      <Title>Cart</Title>

      <CartItems />
      <div className={s.total}>Total</div>
    </div>
  );
};
