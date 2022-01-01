import {BUY_ICE_CREAM, ADD_ICE_CREAM} from '../constants/IceCreamConstant';

const initialState = {
  numberOfIceCream: 15,
};

const IceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        ...state,
        numberOfIceCream: state.numberOfIceCream - 1,
      };
    case ADD_ICE_CREAM:
      return {
        ...state,
        numberOfIceCream: state.numberOfIceCream + 1,
      };
    default:
      return state;
  }
};

export default IceCreamReducer;
