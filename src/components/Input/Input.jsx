import React, { useMemo, useState } from 'react';
import s from './input.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

const Input = ({ type, className, errors, ...args }) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = useMemo(() => {
    if (type === 'password') {
      return showPassword ? 'text' : 'password';
    } else if (type) {
      return type;
    } else {
      return 'text';
    }
  }, [showPassword, type]);

  return (
    <>
      <div className={s.inputContainer}>
        <input
          type={inputType}
          className={`${s.input} ${className}`}
          {...args}
        />
        {type === 'password' && (
          <div
            className={classNames(s.passwordEye, className)}
            onClick={() => setShowPassword((prev) => !prev)}
          >
            <FontAwesomeIcon
              color={'#191919'}
              icon={showPassword ? faEye : faEyeSlash}
              size={'md'}
            />
          </div>
        )}
      </div>
      {!!errors?.length &&
        errors.map((item, index) => (
          <span key={index} className={s.notValid}>
            {item}
          </span>
        ))}
    </>
  );
};

export default Input;
