import {BUY_CAKE, ADD_CAKE} from '../constants/CakeConstant';

const initialState = {
  numberOfCake: 10,
};

const CakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCake: state.numberOfCake - 1,
      };
    default:
      return state;
  }
};

export default CakeReducer;
