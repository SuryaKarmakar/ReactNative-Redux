import React from 'react';
import {View, Text, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {buyPizzaAction, addPizzaAction} from '../../redux/actions/PizzaAction';

import Styles from './styles';

const PizzaProductScreen = () => {
  const numberOfIceCream = useSelector(
    state => state?.PizzaProductScreen?.numberOfPizza,
  );
  const dispatch = useDispatch();

  return (
    <View style={Styles.container}>
      <Text style={Styles.textStyle}>Total IceCream : {numberOfIceCream}</Text>
      <View style={Styles.flexRowView}>
        <Button title="Add Pizza" onPress={() => dispatch(addPizzaAction(5))} />
        <Button title="Buy Pizza" onPress={() => dispatch(buyPizzaAction(2))} />
      </View>
    </View>
  );
};

export default PizzaProductScreen;
