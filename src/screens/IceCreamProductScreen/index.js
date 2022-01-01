import React from 'react';
import {View, Text, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {buyCakeAction, addCakeAction} from '../../redux/actions/CakeAction';

import Styles from './styles';

const IceCreamProductScreen = () => {
  const numberOfCake = useSelector(state => state?.numberOfCake);
  const dispatch = useDispatch();
  return (
    <View style={Styles.container}>
      <Text style={Styles.textStyle}>Total IceCream : {numberOfCake}</Text>
      <View style={Styles.flexRowView}>
        <Button
          title="Add IceCream"
          onPress={() => dispatch(addCakeAction())}
        />
        <Button
          title="Buy IceCream"
          onPress={() => dispatch(buyCakeAction())}
        />
      </View>
    </View>
  );
};

export default IceCreamProductScreen;
