import { OPEN_MODAL, CLOSE_MODAL } from './baseModalActionTypes';
import { reducerGenerator } from '../../utils/store';

const HANDLERS = {
  [OPEN_MODAL]: (state, { Content, onClose }) => {
    return {
      ...state,
      visible: true,
      Content: Content ?? null,
      onClose: onClose ?? null,
    };
  },
  [CLOSE_MODAL]: (state) => ({
    ...state,
    visible: false,
    Content: null,
  }),
};

const initialState = {
  visible: false,
  Content: null,
  onClose: null,
};

export default reducerGenerator(initialState, HANDLERS);
