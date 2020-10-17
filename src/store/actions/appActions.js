import {
  CLOSE_MODAL, OPEN_MODAL
} from './actionTypes';

export const openModal = (payload) => {
  return {
    type: OPEN_MODAL,
    payload
  }
}
export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  }
}
