import React from 'react';
import {View, Text} from 'react-native';
import Styles from './styles';
import ProductScreen from '../ProductScreen';

const HomeScreen = () => {
  return (
    <View style={Styles.container}>
      <ProductScreen />
    </View>
  );
};
export default HomeScreen;
