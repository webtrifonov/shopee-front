import React from 'react';
import s from './Input.module.scss';

const Input = ({className, ...args}) => {
  console.log('args = ', args);

  return (
    <div>
      <input
        type="text"
        className={`${s.input} ${className}`}
        {...args}

      />
    </div>
  );
};

export default Input;
