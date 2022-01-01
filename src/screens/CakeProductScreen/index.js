import React from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {buyCakeAction, addCakeAction} from '../../redux/actions/CakeAction';

import Styles from './styles';

const CakeProductScreen = props => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.textStyle}>Total Cake : {props.numberOfCake}</Text>
      <View style={Styles.flexRowView}>
        <Button title="Add Cake" onPress={props.addCakeAction} />
        <Button title="Buy Cake" onPress={props.buyCakeAction} />
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    numberOfCake: state?.CakeReducer?.numberOfCake,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyCakeAction: () => dispatch(buyCakeAction()),
    addCakeAction: () => dispatch(addCakeAction()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CakeProductScreen);
