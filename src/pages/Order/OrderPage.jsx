import React, { memo } from 'react';
import { CreditCard } from '../../components/CreditCard/CreditCard';

export const OrderPage = memo(() => {
  return (
    <div>
      <CreditCard last4={4444} expMonth={8} expYear={2022} />
    </div>
  );
});
