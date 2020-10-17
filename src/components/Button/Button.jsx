import React from 'react';
import s from './Button.module.scss';

const Button = (props) => {
  const {children, className, color, Icon, ...args} = props;

  return (
    <div
      style={color && {border: `1px solid ${color}`}}
      className={`${s.button} ${className}`}
      {...args}
    >
      {Icon && <Icon />}
      {children}
    </div>
  );
};

export default Button;
