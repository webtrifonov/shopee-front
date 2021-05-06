import { reducerGenerator } from '../../utils/store';
import { TOGGLE_TOOLTIP } from './tooltip.constants';

const HANDLERS = {
  [TOGGLE_TOOLTIP]: (state, { message }) => {
    return {
      ...state,
      visible: !state.visible,
      message: message ?? '',
    };
  },
};

const initialState = {
  visible: false,
  message: '',
};

export const tooltip = reducerGenerator(initialState, HANDLERS);
