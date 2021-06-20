import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store/store';
import './assets/css/main.scss';
import './assets/css/media.scss';
import Loader from './components/icons/Loader/Loader';
import withLayout from './utils/hocs';
import { BaseModal } from './modules/BaseModal';
import { Tooltip } from './modules/Tooltip';

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
    <Provider store={store}>
      <BaseModal />
      <Tooltip />
      <BrowserRouter>
        <Suspense fallback={<Loader global />}>
          <Switch>
            <Route
              path="/wishlist"
              component={withLayout(BaseLayout, WishList, { auth: true })}
            />
            <Route
              path="/orders"
              component={withLayout(BaseLayout, Orders, { auth: true })}
            />
            <Route
              path="/about"
              component={withLayout(BaseLayout, AboutPage)}
            />
            <Route
              path="/products/:listingId"
              component={withLayout(BaseLayout, ListingPage)}
            />
            <Route path="/chat" component={withLayout(BaseLayout, ChatPage)} />
            <Route
              exact
              path="/"
              component={withLayout(BaseLayout, HomePage, {})}
            />
            <Route
              path="/"
              component={withLayout(BaseLayout, NotFound404Page, {})}
            />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
