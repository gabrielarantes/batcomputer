import React from 'react';
import {Text} from 'react-native';
import {Btn} from './styles';

function Button({title, onPress}) {
  return (
    <Btn onPress={onPress}>
      <Text>{title}</Text>
    </Btn>
  );
}

export default Button;
