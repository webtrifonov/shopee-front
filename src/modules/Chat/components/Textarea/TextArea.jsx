import React, { memo } from 'react';
import s from './textArea.module.scss';
import classNames from 'classnames';

export const Textarea = memo((props) => {
  const { name, children, errors, className, ...rest } = props;
  return (
    <div className={s.textAreaContainer}>
      <textarea
        name={name}
        className={classNames(s.textArea, className)}
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
    </div>
  );
});
