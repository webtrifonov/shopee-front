import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { fetchOrdersStart } from '../../store/actions/userActions';
import { Title } from '../../components/Title/Title';

const Orders = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.userReducer);
  const { authUser } = useSelector((state) => state.authReducer);

  useEffect(() => {
    dispatch(fetchOrdersStart());
  }, [dispatch]);
  // TODO orders
  return authUser?.id ? (
    <div>
      <Title>Orders</Title>
      {orders.map((item) => (
        <div style={{ marginBottom: 50 }}>
          <p>{item.userId}</p>
          <p>{item.status}</p>
          <p>{item.totalPrice}</p>
        </div>
      ))}
    </div>
  ) : (
    <Navigate
      to={{
        pathname: '/',
      }}
    />
  );
};

export default Orders;
