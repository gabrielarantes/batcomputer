import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';

import {ListItem} from 'react-native-elements';

function CardHero({navigation, item, image}) {
  return (
    <View style={{flex: 1, marginBottom: 15}}>
      <ListItem
        key={item.id}
        leftAvatar={{source: {uri: image}}}
        title={item.name}
        subtitle={item.work.occupation}
        bottomDivider
        onPress={() => {
          navigation.navigate('Hero', {item});
        }}
      />
    </View>
  );
}

export default CardHero;
