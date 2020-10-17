import {all, takeEvery} from '@redux-saga/core/effects';

export const reducerGenerator = (initialState, handlers) => (state = initialState, { type, payload }) => {
  const handler = handlers[type];
  return handler ? handler(state, payload) : state;
};

export const sagaGenerator = (handlers) => function* sagaReducer() {
  const sagas = Object
    .keys(handlers)
    .reduce((acc, key) => {
      if (Object.prototype.hasOwnProperty.call(handlers, key)) {
        acc.push(takeEvery(key, handlers[key]));
      }
      return acc;
    }, []);
  yield all([...sagas]);
};
