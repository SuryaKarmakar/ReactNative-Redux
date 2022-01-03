import React from 'react';
import {View, Text, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  buyIceCreamAction,
  addIceCreamAction,
} from '../../redux/actions/IceCreamAction';

import Styles from './styles';

const IceCreamProductScreen = () => {
  const numberOfIceCream = useSelector(
    state => state?.IceCreamReducer?.numberOfIceCream,
  );
  const dispatch = useDispatch();

  return (
    <View style={Styles.container}>
      <Text style={Styles.textStyle}>Total IceCream : {numberOfIceCream}</Text>
      <View style={Styles.flexRowView}>
        <Button
          title="Add IceCream"
          onPress={() => dispatch(addIceCreamAction())}
        />
        <Button
          title="Buy IceCream"
          onPress={() => dispatch(buyIceCreamAction())}
        />
      </View>
    </View>
  );
};

export default IceCreamProductScreen;
