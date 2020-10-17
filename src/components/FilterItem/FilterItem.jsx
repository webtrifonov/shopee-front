import React from 'react';
import s from './FilterItem.module.scss';

const FilterItem = ({title}) => {
  return (
    <div>
      <label className={s.filterItem}>
        <input
          type="checkbox"
          className={s.checkbox}
          value="ballu"
        />
        {title && <span className={s.title}>{title}</span>}
      </label>
    </div>
  );
};

export default FilterItem;
