import React from 'react';
import {View, Text} from 'react-native';
import Styles from './styles';
import CakeProductScreen from '../CakeProductScreen';
import IceCreamProductScreen from '../IceCreamProductScreen';

const HomeScreen = () => {
  return (
    <View style={Styles.container}>
      <CakeProductScreen />
      <IceCreamProductScreen />
    </View>
  );
};
export default HomeScreen;
