import React from 'react';
import s from './ProductsList.module.scss';
import ProductItem from '../ProductItem/ProductItem';
import { useSelector } from 'react-redux';

const ProductsList = ({ products }) => {
  const { viewStatus } = useSelector((state) => state.productsReducer);

  return (
    <div
      className={`${s.productsList} ${
        viewStatus === 'grid' && s.productsListGrid
      }`}
    >
      {products?.length
        ? products.map((item) => {
            return (
              <ProductItem key={item.id} item={item} viewStatus={viewStatus} />
            );
          })
        : null}
    </div>
  );
};

export default ProductsList;
