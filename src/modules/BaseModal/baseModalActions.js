import { OPEN_MODAL, CLOSE_MODAL } from './baseModalActionTypes';

export const openModal = (Content) => {
  return {
    type: OPEN_MODAL,
    payload: Content,
  };
};
export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};
