import React, { useEffect } from 'react';
import s from './Product.module.scss';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductByIdStart } from '../../store/actions/productsActions';
import Loader from '../../components/icons/Loader/Loader';
import ProductItem from '../../components/ProductItem/ProductItem';

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loadingProduct, product } = useSelector(
    (state) => state.productsReducer
  );
  useEffect(() => {
    dispatch(fetchProductByIdStart(id));
  }, [dispatch, id]);
  return (
    <div className={s.productContainer}>
      {loadingProduct ? <Loader /> : <ProductItem item={product} />}
    </div>
  );
};

export default Product;
