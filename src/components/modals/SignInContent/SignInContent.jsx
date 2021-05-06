import React, { useState } from 'react';
import Title from '../../Title/Title';
import Input from '../../Input/Input';
import s from '../../../modules/Header/components/AuthBar/authBar.module.scss';
import Button from '../../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeSignInFieldEmail,
  changeSignInFieldPassword,
  changeSignInFieldRememberMe,
  changeSignInNoValidEmail,
  changeSignInNoValidPassword,
  fetchLoginStart,
} from '../../../store/actions/authActions';
import { validationEmail, validationPassword } from '../../../utils/validation';
import FilterItem from '../../../modules/ListingsFiltersBar/components/FilterItem/FilterItem';

const SignInContent = () => {
  const dispatch = useDispatch();
  const {
    signInFieldEmail,
    signInFieldPassword,
    signInFieldRememberMe,
    signInNoValidEmail,
    signInNoValidPassword,
  } = useSelector((state) => state.authReducer);

  const [animate, setAnimate] = useState(false);
  const signInEmail = (event) => {
    const { value } = event.target;
    dispatch(changeSignInFieldEmail(value));
    const validationErrors = validationEmail(value);
    dispatch(changeSignInNoValidEmail(validationErrors));
  };
  const signInPassword = (event) => {
    const { value } = event.target;
    dispatch(changeSignInFieldPassword(value));
    const validationErrors = validationPassword(value);
    dispatch(changeSignInNoValidPassword(validationErrors));
  };
  const signInRememberMe = (event) => {
    const { checked } = event.target;

    dispatch(changeSignInFieldRememberMe(checked));
  };
  const signIn = (event) => {
    event.preventDefault();
    if (
      signInNoValidEmail.length ||
      signInNoValidPassword.length ||
      signInFieldEmail === '' ||
      signInFieldPassword === ''
    ) {
      setAnimate(true);
    } else {
      dispatch(
        fetchLoginStart({
          email: signInFieldEmail,
          password: signInFieldPassword,
          rememberMe: signInFieldRememberMe,
        })
      );
    }
  };

  return (
    <div
      className={`${s.authContent} bg-dark ${animate ? s.animateShake : ''}`}
      onAnimationEnd={() => setAnimate(false)}
    >
      <form onSubmit={signIn}>
        <Title>Sign In</Title>
        <Input
          className={s.input}
          name="email"
          placeholder="E-mail"
          onChange={signInEmail}
          value={signInFieldEmail}
          errors={signInNoValidEmail}
        />
        <Input
          className={s.input}
          type="password"
          name="password"
          placeholder="Password"
          onChange={signInPassword}
          value={signInFieldPassword}
          errors={signInNoValidPassword}
        />
        <FilterItem
          className={s.rememberMe}
          type="checkbox"
          title={'Remember me'}
          name="rememberme"
          checked={signInFieldRememberMe}
          onChange={signInRememberMe}
        />
        <Button
          type="submit"
          className={`${s.signIn} ${s.input}`}
          onClick={signIn}
        >
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default SignInContent;
