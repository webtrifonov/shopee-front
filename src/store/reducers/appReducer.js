import {OPEN_MODAL, CLOSE_MODAL, TOGGLE_TOOLTIP} from '../actions/actionTypes';
import {reducerGenerator} from '../../utils/store';

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
  [TOGGLE_TOOLTIP]: (state, payload) => {
    return {
      ...state,
      tooltip: {
        visible: !state.tooltip.visible,
        text: payload,
      }
    }
  }
};

const initialState = {
  modal: false,
  ModalContent: null,
  tooltip: {
    visible: false,
    text: '',
  }

};

export default reducerGenerator(initialState, HANDLERS);
