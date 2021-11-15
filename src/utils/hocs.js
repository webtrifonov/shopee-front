import React, { useEffect } from 'react';
import { STORAGE_TOKEN } from './constants';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthUserStart } from '../store/actions/authActions';
import { Navigate } from 'react-router-dom';

const withLayout = (Layout, Component, options = {}) => {
  const isPageForAuthUser = Boolean(options?.auth);

  return () => {
    const dispatch = useDispatch();
    const { authToken } = useSelector((state) => state.authReducer);
    const token = authToken || localStorage.getItem(STORAGE_TOKEN);

    useEffect(() => {
      if (token) {
        dispatch(fetchAuthUserStart(token));
      }
    }, [dispatch, token]);

    return token || !isPageForAuthUser ? (
      <Layout>
        <Component />
      </Layout>
    ) : (
      <Navigate
        to={{
          path: '/',
        }}
      />
    );
  };
};
export default withLayout;
