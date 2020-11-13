import React, { useState } from 'react';
import s from '../../Auth/Auth.module.scss';
import Title from '../../Title/Title';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeSignUpFieldEmail,
  changeSignUpFieldPassword,
  changeSignUpNoValidEmail,
  changeSignUpNoValidPassword,
  fetchRegisterStart,
} from '../../../store/actions/authActions';
import { validationEmail, validationPassword } from '../../../utils/validation';

const SignUpContent = () => {
  const dispatch = useDispatch();
  const [animate, setAnimate] = useState(false);
  const {
    signUpFieldEmail,
    signUpFieldPassword,
    signUpNoValidEmail,
    signUpNoValidPassword,
  } = useSelector((state) => state.authReducer);

  const signUpEmail = (event) => {
    const { value } = event.target;
    dispatch(changeSignUpFieldEmail(value));
    const validationErrors = validationEmail(value);
    dispatch(changeSignUpNoValidEmail(validationErrors));
  };
  const signUpPassword = (event) => {
    const { value } = event.target;
    dispatch(changeSignUpFieldPassword(value));
    const validationErrors = validationPassword(value);
    dispatch(changeSignUpNoValidPassword(validationErrors));
  };

  const signUp = (event) => {
    event.preventDefault();
    if (
      signUpNoValidEmail.length ||
      signUpNoValidPassword.length ||
      signUpFieldEmail === '' ||
      signUpFieldPassword === ''
    ) {
      setAnimate(true);
    } else {
      dispatch(
        fetchRegisterStart({
          email: signUpFieldEmail,
          password: signUpFieldPassword,
        })
      );
    }
  };

  return (
    <div
      className={`${s.authContent} bg-dark ${animate ? s.animateShake : ''}`}
      onAnimationEnd={() => setAnimate(false)}
    >
      <form onSubmit={signUp}>
        <Title>Sign Up</Title>
        <Input
          className={s.input}
          name="email"
          placeholder="E-mail"
          onChange={signUpEmail}
          value={signUpFieldEmail}
        />
        {!!signUpNoValidEmail.length &&
          signUpNoValidEmail.map((item, index) => (
            <span key={index} className={s.notValid}>
              {item}
            </span>
          ))}
        <Input
          className={s.input}
          type="password"
          name="password"
          placeholder="Password"
          onChange={signUpPassword}
          value={signUpFieldPassword}
        />
        {!!signUpNoValidPassword.length &&
          signUpNoValidPassword.map((item, index) => (
            <span key={index} className={s.notValid}>
              {item}
            </span>
          ))}
        <Button
          onClick={signUp}
          type="submit"
          className={`${s.signUp} ${s.input}`}
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpContent;
