import React from 'react';
import {View, Text} from 'react-native';

import Spinner from 'react-native-loading-spinner-overlay';

function Loading() {
  return (
    <Spinner
      visible={true}
      textContent={'Loading...'}
      //textStyle={}
    />
  );
}

export default Loading;