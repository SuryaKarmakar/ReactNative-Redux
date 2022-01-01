import {createStore, combineReducers} from 'redux';
import CakeReducer from './reducers/CakeReducer';
import IceCreamReducer from './reducers/IceCreamReducer';

const rootReducer = combineReducers({
  CakeReducer: CakeReducer,
  IceCreamReducer: IceCreamReducer,
});
const store = createStore(rootReducer);

export default store;
