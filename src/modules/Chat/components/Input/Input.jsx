import React from 'react';
import s from './input.module.scss';

const Input = ({ className, errors, ...args }) => {
  return (
    <>
      <div>
        <input type="text" className={`${s.input} ${className}`} {...args} />
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
