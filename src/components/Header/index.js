import React from 'react';
import {Text, View} from 'react-native';

import {colors} from '../../constants/colors';

import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';

function Header({title}) {
  return (
    <View style={{flex: 0.1}}>
      <MaterialComIcon
        name="arrow-left-circle"
        size={30}
        color={colors.blue_beauty}
        style={{position: 'absolute', padding: 0}}
      />
      <Text
        style={{alignSelf: 'center', fontSize: 22, color: colors.blue_beauty}}>
        {title}
      </Text>
    </View>
  );
}

export default Header;
