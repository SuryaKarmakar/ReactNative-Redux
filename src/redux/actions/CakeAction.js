import {BUY_CAKE, ADD_CAKE} from '../constants/CakeConstant';

export const buyCakeAction = () => {
  return {
    type: BUY_CAKE,
  };
};

export const addCakeAction = () => {
  return {
    type: ADD_CAKE,
  };
};
