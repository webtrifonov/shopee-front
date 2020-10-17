import React from 'react';
import s from './ProductsFilters.module.scss';
import Accordion from '../Accordion/Accordion';
import FilterItem from '../FilterItem/FilterItem';

const ProductsFilters = (props) => {
  const {categories} = props;

  return (
    <div className={`${s.filters} bg-black`}>
      <Accordion
        summary={'Category'}
        Details={() => (
          <div className={s.details}>
            {
              categories?.length
                ? categories.map((item) => {
                return <FilterItem key={item.id} title={item.title} />
              }) : null
            }
          </div>
        )}
      />
      <Accordion
        summary={'Existence'}
        Details={() => (
          <div className={s.details}>
            <FilterItem title={'yes'} />
            <FilterItem title={'no'} />
          </div>
        )}
      />
      <Accordion
        summary={'Price'}
        Details={() => (
          <div className={s.details}>
            {/*<FilterItem title={'yes'} />*/}
            {/*<FilterItem title={'no'} />*/}
          </div>
        )}
      />
    </div>
  );
};

export default ProductsFilters;
