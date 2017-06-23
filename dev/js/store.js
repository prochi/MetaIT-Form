import { createStore } from 'redux';
import { fromJS } from 'immutable';
import createReducer from './reducers';

export default function configureStore(initialState = {}) {

  const store = createStore(
    createReducer(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
}
