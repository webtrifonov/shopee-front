import { Navigate, Outlet } from 'react-router-dom';
import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { STORAGE_TOKEN } from './utils/constants';
import { fetchAuthUserStart } from './store/actions/authActions';

export const PrivateRoutes = memo(() => {
  const dispatch = useDispatch();
  const { authToken } = useSelector((state) => state.authReducer);
  const token = authToken || localStorage.getItem(STORAGE_TOKEN);

  useEffect(() => {
    if (token) {
      dispatch(fetchAuthUserStart(token));
    }
  }, [dispatch, token]);

  return token ? <Outlet /> : <Navigate to={'/'} />;
});
