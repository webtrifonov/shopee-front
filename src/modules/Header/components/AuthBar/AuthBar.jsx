import React, { memo } from 'react';
import s from './authBar.module.scss';
import cartIcon from '../../../../assets/images/cart.svg';
import Button from '../../../../components/Button/Button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SignUpContent from '../../../../components/modals/SignUpContent/SignUpContent';
import SignInContent from '../../../../components/modals/SignInContent/SignInContent';
import { STORAGE_TOKEN } from '../../../../utils/constants';
import {
  changeAuthToken,
  fetchAuthUserSuccess,
} from '../../../../store/actions/authActions';
import { openModal } from '../../../BaseModal/baseModal.actions';

export const AuthBar = memo(() => {
  const dispatch = useDispatch();
  const { authUser } = useSelector((state) => state.authReducer);
  const isAuthenticated = !!authUser?.id;

  const openSignInModal = () => {
    dispatch(openModal({ Content: SignInContent }));
  };
  const openSignUpModal = () => {
    dispatch(openModal({ Content: SignUpContent }));
  };
  const logOut = () => {
    localStorage.removeItem(STORAGE_TOKEN);
    dispatch(changeAuthToken(null));
    dispatch(fetchAuthUserSuccess({}));
  };

  return (
    <div className={s.auth}>
      <div className={s.authTitle}>
        {isAuthenticated ? `${authUser.email}` : `Account`}
      </div>
      <div className={s.authBar}>
        <div className={s.buttons}>
          {!isAuthenticated && (
            <Button onClick={openSignUpModal} className={s.signUp}>
              Sign Up
            </Button>
          )}
          <Button
            onClick={isAuthenticated ? logOut : openSignInModal}
            className={s.signIn}
          >
            {isAuthenticated ? 'Logout' : 'Sign In'}
          </Button>
        </div>
      </div>
      <div className={s.cartButton}>
        <Link to={'/cart'}>
          <img className={s.cartIcon} src={cartIcon} alt="Cart" />
        </Link>
      </div>
      {isAuthenticated && (
        <div className={s.cartActions}>
          <Link to={'/wishlist'}>Wish List</Link>
          <Link to={'/orders'}>My Orders</Link>
        </div>
      )}
    </div>
  );
});
