import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from './store/store';
import './assets/css/main.scss';
import './assets/css/media.scss';
import Loader from './components/icons/Loader/Loader';
import { BaseModal } from './modules/BaseModal';
import { Tooltip } from './modules/Tooltip';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { PrivateRoutes } from './PrivateRoutes';

const HomePage = lazy(() =>
  import('./pages/Home').then((module) => ({ default: module.HomePage }))
);
const AboutPage = lazy(() =>
  import('./pages/About').then((module) => ({ default: module.AboutPage }))
);
const ListingPage = lazy(() =>
  import('./pages/Listing').then((module) => ({ default: module.ListingPage }))
);
const ChatPage = lazy(() =>
  import('./pages/Chat').then((module) => ({ default: module.ChatPage }))
);
const OrderPage = lazy(() =>
  import('./pages/Order').then((module) => ({ default: module.OrderPage }))
);
const CartPage = lazy(() =>
  import('./pages/Cart').then((module) => ({ default: module.CartPage }))
);
const BaseLayout = lazy(() =>
  import('./layouts/BaseLayout/BaseLayout').then((module) => ({
    default: module.BaseLayout,
  }))
);
// const Product = lazy(() => import('./containers/Product/Product'));
const Orders = lazy(() => import('./containers/Orders/Orders'));
const WishList = lazy(() => import('./containers/WishList/WishList'));
const NotFound404Page = lazy(() =>
  import('./pages/NotFound404Page').then((module) => ({
    default: module.NotFound404Page,
  }))
);

const Root = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <BaseModal />
        <Tooltip />
        <BrowserRouter>
          <Suspense fallback={<Loader global />}>
            <Routes>
              <Route element={<BaseLayout />}>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/cart" element={<CartPage />} />
                <Route exact path="/wishlist" element={<WishList />} />
                <Route exact path="/orders" element={<Orders />} />
                <Route exact path="/about" element={<AboutPage />} />
                <Route
                  exact
                  path="/products/:listingId"
                  element={<ListingPage />}
                />
                <Route exact path="/chat" element={<ChatPage />} />
                <Route exact path="/products" element={<HomePage />} />
                <Route exact path="/" element={<NotFound404Page />} />

                <Route element={<PrivateRoutes />}>
                  <Route exact path={'/order'} element={<OrderPage />} />
                </Route>
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  );
};

export default Root;
