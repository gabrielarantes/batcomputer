import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';

import * as Progress from 'react-native-progress';

import {Container} from './styles';

function Splash({navigation}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    updateProgess();
  }, []);

  updateProgess = () => {
    if (progress < 1) {
      setProgress(progress + 0.2);
      setTimeout(() => {
        updateProgess();
      }, 2000);
    } else {
      navigation.replace('Home');
    }
  };

  return (
    <Container>
      <ImageBackground
        source={require('../../assets/batcave.jpeg')}
        style={{width: '100%', height: '100%'}}>
        <View
          style={{
            position: 'absolute',
            zIndex: 2,
            bottom: 20,
            alignItems: 'center',
            width: '100%',
          }}>
          <Text>Loading ...</Text>
          <Progress.Bar progress={progress} width={200}></Progress.Bar>
        </View>
      </ImageBackground>
    </Container>
  );
}

export default Splash;
