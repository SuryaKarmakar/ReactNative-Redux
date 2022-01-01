import React from 'react';
import {View, Text, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {buyCakeAction, addCakeAction} from '../../redux/actions/CakeAction';

import Styles from './styles';

const IceCreamProductScreen = () => {
  const numberOfCake = useSelector(state => state?.numberOfCake);
  return (
    <View style={Styles.container}>
      <Text style={Styles.textStyle}>Total IceCream : {numberOfCake}</Text>
      <View style={Styles.flexRowView}>
        {/* <Button title="Add Cake" onPress={props.addCakeAction} />
        <Button title="Buy Cake" onPress={props.buyCakeAction} /> */}
      </View>
    </View>
  );
};

export default IceCreamProductScreen;
