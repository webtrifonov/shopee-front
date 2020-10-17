import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store/store';
import './assets/css/main.scss';
import './assets/css/media.scss';
import Loader from './components/icons/Loader/Loader';
import withLayout from './utils/hocs';
import BaseModal from './components/BaseModal/BaseModal';

const BaseLayout = lazy(() => import('./layouts/BaseLayout/BaseLayout'));
const Home = lazy(() => import('./containers/Home/Home'));
const About = lazy(() => import('./containers/About/About'));

function Root() {
  return (
    <Provider store={store}>
      <BaseModal />
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/" component={withLayout(BaseLayout, Home, {})} />
            <Route exact path="/about" component={withLayout(BaseLayout, About, {})} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
}

export default Root;
