import {OPEN_MODAL, CLOSE_MODAL} from '../actions/actionTypes';
import reducerGenerator from '../../utils/store';

const HANDLERS = {
  [OPEN_MODAL]: (state, payload) => {

    return {
      ...state,
      modal: true,
      ModalContent: payload.Content
    };
  },
  [CLOSE_MODAL]: (state) => ({
    ...state,
    modal: false,
    ModalContent: null
  }),
};

const initialState = {
  modal: false,
  ModalContent: null,
};

export default reducerGenerator(initialState, HANDLERS);
