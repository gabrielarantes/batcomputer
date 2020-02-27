import React, {useState, useEffect} from 'react';
import {TextInput} from './styles';

function Input({onChangeText, value}) {
  return <TextInput onChangeText={onChangeText} value={value} />;
}

export default Input;
