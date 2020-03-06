import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  FlatList,
  Dimensions,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import {Container, TextIntro} from './styles';

import {colors} from '../../constants/colors';
import {isEmpty} from 'lodash';

import {apiUrl, api} from '../../config/api';

import NetInfo from '@react-native-community/netinfo';
import MatComIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import ButtonHome from '../../components/ButtonHome';
import MarqueeFinancial from '../../components/MarqueeFinancial';

function Home({navigation}) {
  const [connectionType, setConnectionType] = useState('');
  const [isConnected, setIsConnected] = useState('');
  const [width, setWidth] = useState(Dimensions.get('screen').width - 250);

  useEffect(() => {
    NetInfo.addEventListener(state => {
      setConnectionType(state.type);
      setIsConnected(state.isConnected);
    });
  }, []);

  return (
    <View style={{flex: 1}}>
      <MarqueeFinancial hasConnection={isConnected} />
      <LinearGradient
        style={{flex: 1, padding: 10, paddingTop: 5}}
        colors={[colors.black, colors.background, colors.black]}>
        <View
          style={{
            flex: 0.4,
            alignItems: 'center',
            borderWidth: 1,
            borderColor: colors.blue_border,
            padding: 15,
            borderRadius: 4,
            marginBottom: 20,
          }}>
          <TextIntro>Welcome to the</TextIntro>
          <MatComIcon
            color={colors.white}
            size={width}
            name={'bat'}
            style={{alignSelf: 'center', padding: 0}}
          />

          <TextIntro>BATCOMPUTER</TextIntro>
        </View>

        <View
          style={{
            flex: 0.6,
          }}>
          <View style={{flex: 0.5, flexDirection: 'row'}}>
            <ButtonHome
              title="Find Hero"
              icon="mask"
              lib={'entypoIcon'}
              onPress={() => {
                navigation.navigate('Finder');
              }}
            />
            <ButtonHome
              title="Status Network"
              icon="wifi"
              lib={'materialIcon'}
            />
          </View>
          <View style={{flex: 0.5, flexDirection: 'row'}}>
            <ButtonHome
              title="Financial Market"
              icon="finance"
              lib={'materialIcon'}
            />
            <ButtonHome title="News" icon="map" lib={'materialIcon'} />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

export default Home;
