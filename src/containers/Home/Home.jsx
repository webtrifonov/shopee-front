import React, {useEffect} from 'react';
import s from './Home.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCategoriesStart, fetchProductsStart} from '../../store/actions/productsActions';
import ProductsFilters from '../../components/ProductsFilters/ProductsFilters';
import ProductsList from '../../components/ProductsList/ProductsList';
import Title from '../../components/Title/Title';
import ProductsStatus from '../../components/ProductsStatus/ProductsStatus';
import Loader from '../../components/icons/Loader/Loader';


const Home = () => {
  const dispatch = useDispatch();

  const {categories, products, filters, loadingProducts} = useSelector(state => state.productsReducer);

  const {viewStatus} = useSelector(state => state.productsReducer);
  useEffect(() => {
    dispatch(fetchCategoriesStart());
  },  []);
  useEffect(() => {
    dispatch(fetchProductsStart(filters));
  },  [filters]);



  return (
    <div className={s.mainContainer}>
      <Title>All products</Title>
      <ProductsStatus
        count={products.length}
        viewStatus={viewStatus}
        filters={filters}
      />
      <ProductsFilters
        categories={categories}
      />
      {
        loadingProducts ? (
          <div className={`${s.noProducts} loading-container`}>
            <Loader />
          </div>
        ) : (
          products.length ? (
            <ProductsList
              products={products}
            />
          ) : (
            <div className={s.noProducts}>No products</div>
          )
        )
      }

    </div>
  );
};

export default Home;
