import {BUY_PIZZA, ADD_PIZZA} from '../constants/PizzaConstant';

const initialState = {
  numberOfPizza: 10,
};

const IceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_PIZZA:
      return {
        ...state,
        numberOfPizza: state.numberOfPizza - action.payload,
      };
    case ADD_PIZZA:
      return {
        ...state,
        numberOfPizza: state.numberOfPizza + action.payload,
      };
    default:
      return state;
  }
};

export default IceCreamReducer;
