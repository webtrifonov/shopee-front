import React, {useEffect} from 'react';
import s from './Home.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCategoriesStart, fetchProductsStart} from '../../store/actions/productsActions';
import ProductsFilters from '../../components/ProductsFilters/ProductsFilters';
import ProductsList from '../../components/ProductsList/ProductsList';
import Title from '../../components/Title/Title';
import ProductsStatus from '../../components/ProductsStatus/ProductsStatus';


const Home = () => {
  const dispatch = useDispatch();

  const {categories, products, filters} = useSelector(state => state.productsReducer);
  const {viewStatus} = useSelector(state => state.productsReducer);

  useEffect(() => {
    dispatch(fetchProductsStart(filters));
    dispatch(fetchCategoriesStart());
  },  [filters]);


  return (
    <div className={s.mainContainer}>
      <Title>All products</Title>
      <ProductsStatus
        viewStatus={viewStatus}
        filters={filters}
      />
      <ProductsFilters
        categories={categories}
      />
      <ProductsList
        products={products}
      />
    </div>
  );
};

export default Home;
