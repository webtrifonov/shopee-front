import React from 'react';
import s from './FilterItem.module.scss';

const FilterItem = ({ title, ...args }) => {
  return (
    <div>
      <label className={s.filterItem}>
        <input className={s.checkbox} {...args} />
        {title && <span className={s.title}>{title}</span>}
      </label>
    </div>
  );
};
FilterItem.defaultProps = {
  title: '',
  type: 'radio',
};
export default FilterItem;
