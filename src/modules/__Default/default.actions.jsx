import { LISTINGS } from './default.constants';

export const getListingsRequest = (payload) => {
  return {
    type: LISTINGS.REQUEST,
    payload,
  };
};
