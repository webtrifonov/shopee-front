import React, { memo } from 'react';
import s from './creditCard.module.scss';

// interface IProps {
//   last4: string,
//   expYear: number,
//   expMonth: number,
// }
export const CreditCard = memo((props) => {
  const { last4, expYear, expMonth } = props;
  const mouthYear = `${expYear
    .toString()
    .slice(-2)}/${expMonth.toString().padStart(2, '0')}`;
  return (
    <div className={s.creditCardContainer}>
      <div className={s.head}>Credit Card</div>
      <div>
        <div className={s.title}>Card Number:</div>
        <div className={s.text}>**** **** **** {last4}</div>
      </div>
      <div className={s.styledColumns}>
        <div className={s.styledColumn}>
          <div className={s.title}>Month/Year:</div>
          <div className={s.text}>{mouthYear}</div>
        </div>
        <div className={s.styledColumn}>
          <div className={s.title}>CVV:</div>
          <div className={s.text}>***</div>
        </div>
      </div>
    </div>
  );
});
