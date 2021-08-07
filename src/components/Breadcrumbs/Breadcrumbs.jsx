import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import s from './Breadcrumbs.module.scss';

export const Breadcrumbs = memo((props) => {
  const { data } = props;

  return (
    <div className={s.breadcrumbs}>
      {data?.length &&
        data.map((item, index) => {
          return (
            <div key={`${item.to}-${item.name}`} className={s.linkContainer}>
              {index !== data.length - 1 ? (
                <Link className={s.link} to={item.to}>
                  {item.name}
                </Link>
              ) : (
                <span className={s.lastLink}>{item.name}</span>
              )}
            </div>
          );
        })}
    </div>
  );
});
