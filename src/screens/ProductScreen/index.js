import React from 'react';
import {View, Text, Button} from 'react-native';
import Styles from './styles';

const ProductScreen = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.textStyle}>ProductScreen</Text>
      <View style={Styles.flexRowView}>
        <Button title="Add Cake" />
        <Button title="Buy Cake" />
      </View>
    </View>
  );
};
export default ProductScreen;
