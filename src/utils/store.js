import { all, takeEvery } from '@redux-saga/core/effects';

export const reducerGenerator = (initialState, handlers) => (
  state = initialState,
  { type, payload }
) => {
  const handler = handlers[type];
  return handler ? handler(state, payload) : state;
};

export const sagaGenerator = (handlers) =>
  function* sagaReducer() {
    const sagas = Object.keys(handlers).reduce((acc, key) => {
      if (Object.prototype.hasOwnProperty.call(handlers, key)) {
        acc.push(takeEvery(key, handlers[key]));
      }
      return acc;
    }, []);
    yield all([...sagas]);
  };

export const createActions = (actionTypes) => {
  const actions = actionTypes.reduce((acc, actionType) => {
    const functionName = actionType.split('_').map((str, index) => {
      return index ? str[0].toUpperCase() + str.slice(1) : str;
    });
    acc[functionName] = (payload) => ({
      type: actionType,
      payload,
    });
    return acc;
  }, {});
  console.log('>>> actions   = ', actions);

  return actions;
};

export const gen3Types = (actionType) => {
  return [
    actionType + '_REQUEST',
    actionType + '_SUCCESS',
    actionType + '_FAILURE',
  ];
};

export const getRequestType = (baseActionType) => {
  const types = ['REQUEST', 'SUCCESS', 'FAILURE'];

  return types.reduce((acc, type) => {
    acc[type] = `${baseActionType}_${type}`;
    return acc;
  }, {});
};
