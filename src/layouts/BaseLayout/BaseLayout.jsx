import React from 'react';
import { Footer } from '../../modules/Footer';
import { Header } from '../../modules/Header';

export const BaseLayout = (props) => {
  return (
    <div className="page-container bg-dark">
      <div className="container main-container">
        <Header />
        {props.children}
        <Footer />
      </div>
    </div>
  );
};
