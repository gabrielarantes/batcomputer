import React from 'react';
import {Text} from 'react-native';
import {Btn} from './styles';

function ButtonHome({title, onPress}) {
  return (
    <Btn onPress={onPress}>
      <Text>{title}</Text>
    </Btn>
  );
}

export default ButtonHome;
