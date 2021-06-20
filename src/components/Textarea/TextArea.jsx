import React, { memo } from 'react';
import s from '../../modules/Chat/components/Input/input.module.scss';
import classNames from 'classnames';

export const TextArea = memo((props) => {
  const { name, children, errors, className, ...rest } = props;
  return (
    <>
      <textarea
        name={name}
        className={classNames(s.input, className)}
        {...rest}
      >
        {children}
      </textarea>
      {!!errors?.length &&
        errors.map((item, index) => (
          <span key={index} className={s.notValid}>
            {item}
          </span>
        ))}
    </>
  );
});
