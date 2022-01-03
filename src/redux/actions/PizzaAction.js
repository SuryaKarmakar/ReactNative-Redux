import {BUY_PIZZA, ADD_PIZZA} from '../constants/PizzaConstant';

export const buyPizzaAction = extraData => {
  return {
    type: BUY_PIZZA,
    payload: extraData,
  };
};

export const addPizzaAction = extraData => {
  return {
    type: ADD_PIZZA,
    payload: extraData,
  };
};
