import {createStore, combineReducers} from 'redux';
import CakeReducer from './reducers/CakeReducer';
import IceCreamReducer from './reducers/IceCreamReducer';
import PizzaProductScreen from './reducers/PizzaReducer';

const rootReducer = combineReducers({
  CakeReducer: CakeReducer,
  IceCreamReducer: IceCreamReducer,
  PizzaProductScreen: PizzaProductScreen,
});
const store = createStore(rootReducer);

export default store;
