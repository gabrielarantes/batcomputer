import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  FlatList,
} from 'react-native';

function ImageTest() {
  return (
    <View style={{flex: 1}}>
      <Image 
    source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/sample_img.png'}} 
    style={{width: 400, height: 400}} 
/>
      <Text>AQ</Text>
    </View>
  );
}

export default ImageTest;
