import React from 'react';
import {Text, View} from 'react-native';
import {Btn, ViewBtn} from './styles';

import MatComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import {colors} from '../../constants/colors';
import {isEmpty} from 'lodash';

function ButtonHome({title, onPress, icon, lib}) {
  const renderIcon = (icon, lib) => {
    switch (lib) {
      case 'materialIcon':
        return (
          <MatComIcon
            color={colors.blue_border}
            size={50}
            name={icon}
            style={{alignSelf: 'center', padding: 0}}
          />
        );
        break;

      case 'entypoIcon':
        return (
          <EntypoIcon
            color={colors.blue_border}
            size={50}
            name={icon}
            style={{alignSelf: 'center', padding: 0}}
          />
        );
        break;

      default:
        break;
    }
  };

  return (
    <Btn onPress={onPress}>
      {icon && renderIcon(icon, lib)}
      <Text style={{color: colors.white, alignSelf : 'center'}}>{title}</Text>
    </Btn>
  );
}

export default ButtonHome;
