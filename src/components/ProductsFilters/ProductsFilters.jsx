import React, {useEffect, useState} from 'react';
import s from './ProductsFilters.module.scss';
import Accordion from '../Accordion/Accordion';
import FilterItem from '../FilterItem/FilterItem';
import Button from '../Button/Button';
import {changeFilters} from '../../store/actions/productsActions';
import {useDispatch, useSelector} from 'react-redux';
import PriceSlider from '../PriceSlider/PriceSlider';
import {DIGITAL_REG} from '../../utils/constants';
import {priceFormat} from '../../utils/validation';
import {getMaxPrice} from '../../utils/utils';

const ProductsFilters = (props) => {
  const dispatch = useDispatch();
  const {categories} = props;

  const MAX_PRICE = getMaxPrice(categories);

  const {filters} = useSelector((state) => state.productsReducer);
  const [filtersLocal, setFiltersLocal] = useState(filters);
  useEffect(() => {
    const maxPrice = getMaxPrice(categories);
    setFiltersLocal({
      ...filters,
      maxPrice,
    });
  }, [categories, filters]);
  const changeCategoriesHandler = (event) => {
    const {name} = event.target;
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
  }
  const changeExistsHandler = (event) => {
    const {name, value} = event.target;
    setFiltersLocal({
      ...filtersLocal,
     ...{[name]: value}
    });
  }
  const changeMinPriceHandler = (event) => {
    let {value} = event.target;
    if (DIGITAL_REG.test(value)) {
      value = priceFormat(value, MAX_PRICE);
      setFiltersLocal({
        ...filtersLocal,
        minPrice: value
      });
    }
  }
  const changeMaxPriceHandler = (event) => {
    let {value} = event.target;

    if (DIGITAL_REG.test(value)) {
      value = priceFormat(value, MAX_PRICE);
      setFiltersLocal({
        ...filtersLocal,
        maxPrice: value
      });
    }
  }
  const applyFiltersHandler = (event) => {
    event.preventDefault();
    dispatch(changeFilters(filtersLocal));
  }

  return (
    <form onSubmit={applyFiltersHandler} className={`${s.filters} bg-black`}>
      <Accordion
        summary={'Category'}
        Details={() => (
          <fieldset
            className={s.details}
            onChange={changeCategoriesHandler}
          >
            {
              categories?.length
                ? categories.map((item) => {
                  return (
                    <FilterItem
                      type="checkbox"
                      name={item.id}
                      key={item.id}
                      title={item.title}
                      checked={filtersLocal?.categories?.includes(item.id)}
                    />
                  )
              }) : null
            }
          </fieldset>
        )}
      />
      <Accordion
        summary={'Existence'}
        Details={() => (
          <fieldset
            className={s.details}
            onChange={changeExistsHandler}
          >
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
          </fieldset>
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
        <Button
          type="submit"
          className={s.applyFiltersButton}
          color={'#DC4055'}
        >
          Apply filters
        </Button>
      </div>
    </form>
  );
};

export default ProductsFilters;
