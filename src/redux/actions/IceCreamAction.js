import {BUY_ICE_CREAM, ADD_ICE_CREAM} from '../constants/IceCreamConstant';

export const buyIceCreamAction = () => {
  return {
    type: BUY_ICE_CREAM,
  };
};

export const addIceCreamAction = () => {
  return {
    type: ADD_ICE_CREAM,
  };
};
