import { listings } from '../../modules/Listings';
import { listingsFiltersBar } from '../../modules/ListingsFiltersBar';
import { searchForm } from '../../modules/SearchForm';

export const homePage = {
  searchForm,
  listings,
  listingsFiltersBar,
};

export { homePageSagas } from './home.saga';

export { HomePage } from './HomePage';
