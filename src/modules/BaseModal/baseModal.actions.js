import { OPEN_MODAL, CLOSE_MODAL } from './baseModal.constants';

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
