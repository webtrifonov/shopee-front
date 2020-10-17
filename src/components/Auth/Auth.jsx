import React from 'react';
import s from './Auth.module.scss';
import cartIcon from '../../assets/images/cart.svg';
import Button from '../Button/Button';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {openModal} from '../../store/actions/appActions';
import Title from '../Title/Title';
import Input from '../Input/Input';

const Auth = (props) => {
  const dispatch = useDispatch();
  const openSignInModal = () => {
    const Content = (
      <div>
        <form onSubmit={() => {}}>
          <Title>Sign In</Title>
          <Input
            className={s.input}
            name="email"
            placeholder="E-mail"
          />
          <Input
            className={s.input}
            type="password"
            name="password"
            placeholder="Password"
          />
          <Button className={`${s.signIn} ${s.input}`}>Sign In</Button>
        </form>
      </div>
    );
    dispatch(openModal({Content}));
  }
  const openSignUpModal = () => {
    const Content = (
      <div className={`${s.authContent} bg-dark`}>
        <form onSubmit={() => {}}>
          <Title>Sign Up</Title>
          <Input
            className={s.input}
            name="email"
            placeholder="E-mail"
          />
          <Input
            className={s.input}
            type="password"
            name="password"
            placeholder="Password"
          />
          <Button className={`${s.signUp} ${s.input}`}>Sign Up</Button>
        </form>
      </div>
    );
    dispatch(openModal({Content}));
  }
  return (
    <div className={s.auth}>
      <div className={s.authTitle}>Account</div>
      <div className={s.authBar}>
        <div className={s.buttons}>
          <Button onClick={openSignUpModal} className={s.signUp}>Sign Up</Button>
          <Button onClick={openSignInModal} className={s.signIn}>Sign In</Button>
        </div>
      </div>
      <div className={s.cartButton}>
        <div>
          <img
            className={s.cartIcon}
            src={cartIcon}
            alt="Cart"
          />
        </div>
      </div>
      <div className={s.cartActions}>
        <Link to={'/'}>Wish List</Link>
        <Link to={'/'}>My Orders</Link>
      </div>
    </div>
  );
};

export default Auth;
