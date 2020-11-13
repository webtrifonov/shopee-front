import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './Home.module.scss';
import {
  fetchCategoriesStart,
  fetchProductsStart,
} from '../../store/actions/productsActions';
import ProductsFilters from '../../components/ProductsFilters/ProductsFilters';
import ProductsList from '../../components/ProductsList/ProductsList';
import Title from '../../components/Title/Title';
import ProductsStatus from '../../components/ProductsStatus/ProductsStatus';
import Loader from '../../components/icons/Loader/Loader';

const Home = () => {
  const dispatch = useDispatch();

  const { categories, products, filters, loadingProducts } = useSelector(
    (state) => state.productsReducer
  );

  const { viewStatus } = useSelector((state) => state.productsReducer);
  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchProductsStart(filters));
  }, [dispatch, filters]);

  return (
    <div className={s.mainContainer}>
      <Title>All products</Title>
      <ProductsStatus
        count={products.length}
        viewStatus={viewStatus}
        filters={filters}
      />
      <ProductsFilters categories={categories} />
      {loadingProducts ? (
        <div className={`${s.noProducts} loading-container`}>
          <Loader />
        </div>
      ) : products.length ? (
        <ProductsList products={products} />
      ) : (
        <div className={s.noProducts}>No products</div>
      )}
    </div>
  );
};

export default memo(Home);
