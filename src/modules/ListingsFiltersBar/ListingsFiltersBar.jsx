import React, { useEffect, useState } from 'react';
import s from './listingsFiltersBar.module.scss';
import Accordion from '../../components/Accordion/Accordion';
import FilterItem from './components/FilterItem/FilterItem';
import Button from '../../components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import PriceSlider from './components/PriceSlider/PriceSlider';
import { getMaxPrice, priceFormat } from './listingsFiltersBar.helpers';
import { DIGITAL_REG } from './listingsFiltersBar.constants';
import {
  changeFilters,
  getFilterCategoriesRequest,
} from './listingsFiltersBar.actions';
import { listingsFiltersBarSelector } from './listingsFiltersBar.selector';

export const ListingsFiltersBar = () => {
  const dispatch = useDispatch();

  const { categories, filters } = useSelector(listingsFiltersBarSelector);

  const [filtersLocal, setFiltersLocal] = useState(filters);

  const MAX_PRICE = getMaxPrice(categories); // TODO rewrite

  useEffect(() => {
    dispatch(getFilterCategoriesRequest());
  }, [dispatch]);

  useEffect(() => {
    const maxPrice = getMaxPrice(categories);
    setFiltersLocal({
      ...filters,
      maxPrice,
    });
  }, [categories, filters]);
  const changeCategoriesHandler = (event) => {
    const { name } = event.target;
    let categories = filtersLocal?.categories ? filtersLocal.categories : [];

    if (!categories.includes(name)) {
      categories.push(name);
    } else {
      categories = categories.filter((item) => item !== name);
    }
    setFiltersLocal({
      ...filtersLocal,
      categories,
    });
  };
  const changeExistsHandler = (event) => {
    const { name, value } = event.target;
    setFiltersLocal({
      ...filtersLocal,
      ...{ [name]: value },
    });
  };
  const changeMinPriceHandler = (event) => {
    let { value } = event.target;
    if (DIGITAL_REG.test(value)) {
      value = priceFormat(value, MAX_PRICE);
      setFiltersLocal({
        ...filtersLocal,
        minPrice: value,
      });
    }
  };
  const changeMaxPriceHandler = (event) => {
    let { value } = event.target;

    if (DIGITAL_REG.test(value)) {
      value = priceFormat(value, MAX_PRICE);
      setFiltersLocal({
        ...filtersLocal,
        maxPrice: value,
      });
    }
  };
  const applyFiltersHandler = (event) => {
    event.preventDefault();

    dispatch(changeFilters(filtersLocal));
  };

  return (
    <form onSubmit={applyFiltersHandler} className={`${s.filters} bg-black`}>
      <Accordion
        summary={'Category'}
        Details={() => (
          <div className={s.details} onChange={changeCategoriesHandler}>
            {!!categories?.length &&
              categories.map((item) => {
                return (
                  <FilterItem
                    key={item.id}
                    type="checkbox"
                    name={item.id}
                    title={item.title}
                    checked={filtersLocal?.categories?.includes(item.id)}
                  />
                );
              })}
          </div>
        )}
      />
      <Accordion
        summary={'Existence'}
        Details={() => (
          <div className={s.details} onChange={changeExistsHandler}>
            <FilterItem
              title={'all'}
              value={'all'}
              name="exists"
              checked={filtersLocal?.exists === 'all'}
            />
            <FilterItem
              title={'yes'}
              value={'yes'}
              name="exists"
              checked={filtersLocal?.exists === 'yes'}
            />
            <FilterItem
              title={'no'}
              value={'no'}
              name="exists"
              checked={filtersLocal?.exists === 'no'}
            />
          </div>
        )}
      />
      <Accordion
        summary={'Price'}
        Details={() => (
          <div className={s.details}>
            <PriceSlider
              minPrice={filtersLocal.minPrice}
              maxPrice={filtersLocal.maxPrice}
              MAX_PRICE={MAX_PRICE}
              changeMinPriceHandler={changeMinPriceHandler}
              changeMaxPriceHandler={changeMaxPriceHandler}
            />
          </div>
        )}
      />
      <div className={s.applyFilters}>
        <Button type="submit" color={'#DC4055'}>
          Apply filters
        </Button>
      </div>
    </form>
  );
};
