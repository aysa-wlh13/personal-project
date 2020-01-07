import {createStore, applyMiddleware, combineReducers} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducer2 from './reducer2';
import reducer from './reducer';

const rootReducer = combineReducers({
    reducer: reducer,
    reducer2: reducer2
  })

  export default createStore(rootReducer, applyMiddleware(promiseMiddleware));