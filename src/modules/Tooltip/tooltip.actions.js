import { TOGGLE_TOOLTIP } from './tooltip.constants';

export const toggleTooltip = (payload) => {
  return {
    type: TOGGLE_TOOLTIP,
    payload: payload,
  };
};
