import React from 'react';
import {View} from 'react-native';
import Styles from './styles';
import CakeProductScreen from '../CakeProductScreen';
import IceCreamProductScreen from '../IceCreamProductScreen';
import PizzaProductScreen from '../PizzaProductScreen';

const HomeScreen = () => {
  return (
    <View style={Styles.container}>
      <CakeProductScreen />
      <IceCreamProductScreen />
      <PizzaProductScreen />
    </View>
  );
};
export default HomeScreen;
