import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store/store';
import './assets/css/main.scss';
import './assets/css/media.scss';
import Loader from './components/icons/Loader/Loader';
import withLayout from './utils/hocs';
import BaseModal from './components/modals/BaseModal/BaseModal';
import Tooltip from './components/modals/Tooltip/Tooltip';

const BaseLayout = lazy(() => import('./layouts/BaseLayout/BaseLayout'));
const Home = lazy(() => import('./containers/Home/Home'));
const Product = lazy(() => import('./containers/Product/Product'));
const About = lazy(() => import('./containers/About/About'));
const Orders = lazy(() => import('./containers/Orders/Orders'));
const WishList = lazy(() => import('./containers/WishList/WishList'));

function Root() {
  return (
    <Provider store={store}>
      <BaseModal />
      <Tooltip />
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path="/wishlist" component={withLayout(BaseLayout, WishList, {auth: true})} />
            <Route path="/orders" component={withLayout(BaseLayout, Orders, {auth: true})} />
            <Route path="/about" component={withLayout(BaseLayout, About, {})} />
            <Route path="/products/:id" component={withLayout(BaseLayout, Product, {})} />
            <Route path="/" component={withLayout(BaseLayout, Home, {})} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
}

export default Root;
