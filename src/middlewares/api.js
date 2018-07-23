import mock from '../mock/mock';

export const LOAD_START = '_LOAD_START';
export const LOAD_SUCCESS = '_LOAD_SUCCESS';
export const LOAD_ERROR = '_LOAD_ERROR';

export const apiMiddleware = ({dispatch}) => (next) => (action) => {
  if (action.api !== null && typeof action.api === 'object') {
    const { isSuccess = true, time = 0 } = action.api;
    dispatch({
      type: action.type + LOAD_START,
    });
    return new Promise((res, rej) => {
      setTimeout(() => {
        if(isSuccess) {
          dispatch({
            type: action.type + LOAD_SUCCESS,
            payload: {
              flights: mock.flights,
            }
          });
          res({flights: mock.flights});
        } else {
          dispatch({
            type: action.type + LOAD_ERROR,
            error: 'Ошибка Загрузки!'
          });
          rej({error: 'Ошибка Загрузки!'})
        }
      }, time);
    });
  } else {
    return next(action);
  }
};