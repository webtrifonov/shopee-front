import React from 'react';
import { Footer } from '../../modules/Footer';
import { Header } from '../../modules/Header';
import { Outlet } from 'react-router-dom';

export const BaseLayout = (props) => {
  return (
    <div className="page-container bg-dark">
      <div className="container main-container">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};
