import { reducerGenerator } from '../../utils/store';
import { LISTINGS, SET } from './chat.constants';

const HANDLERS = {
  [LISTINGS.REQUEST]: (state) => {
    return {
      ...state,
      loadingListings: true,
    };
  },
  [SET.SEND_FORM]: (state, payload) => {
    return {
      ...state,
      sendForm: {
        ...state.sendForm,
        ...payload,
      },
    };
  },
};
const initialState = {
  loadingListings: false,
  sendForm: {
    name: '',
    message: '',
  },
};
export const chat = reducerGenerator(initialState, HANDLERS);
