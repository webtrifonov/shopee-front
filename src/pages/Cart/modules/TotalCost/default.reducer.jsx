import { reducerGenerator } from '../../utils/store';
import { LISTINGS } from './default.constants';

const HANDLERS = {
  [LISTINGS.REQUEST]: (state) => {
    return {
      ...state,
      loadingListings: true,
    };
  },
};
const initialState = {
  loadingListings: false,
};
export const defaults = reducerGenerator(initialState, HANDLERS);
