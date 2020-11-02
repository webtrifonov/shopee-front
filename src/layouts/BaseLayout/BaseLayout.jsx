import React from 'react';
import s from './BaseLayout.module.scss';
import Header from '../../components/Header/Header';
import Auth from '../../components/Auth/Auth';
import Footer from '../../components/Footer/Footer';

const BaseLayout = (props) => {
  return (
    <div className="page-container bg-dark">
      <div className="container">
        <div className="row">
          <div className={`${s.baseLayout} bg-black`}>
            <Header />
            <Auth />
          </div>
          {props.children}
          <Footer />
        </div>
      </div>
    </div>

  );
}
export default BaseLayout;
