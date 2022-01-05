import React from 'react';
import {View} from 'react-native';
import Styles from './styles';
import CakeProductScreen from '../CakeProductScreen';
import IceCreamProductScreen from '../IceCreamProductScreen';
import PizzaProductScreen from '../PizzaProductScreen';
import UserListScreen from '../UserListScreen';

const HomeScreen = () => {
  return (
    <View style={Styles.container}>
      {/* <CakeProductScreen />
      <IceCreamProductScreen />
      <PizzaProductScreen /> */}
      <UserListScreen />
    </View>
  );
};
export default HomeScreen;
