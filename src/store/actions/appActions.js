import {
  CLOSE_MODAL, OPEN_MODAL, TOGGLE_TOOLTIP
} from './actionTypes';

export const openModal = (Content) => {
  return {
    type: OPEN_MODAL,
    payload: Content
  }
}
export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  }
}
export const toggleTooltip = (tooltip) => {
  return {
    type: TOGGLE_TOOLTIP,
    payload: tooltip
  }
}
