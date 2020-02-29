import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  FlatList,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import CardHero from '../../components/CardHero';

import {Container, Logo} from './styles';

import {colors} from '../../constants/colors';
import {isEmpty} from 'lodash';

import axios from 'axios';
import {apiUrl, api} from '../../config/api';

import NetInfo from '@react-native-community/netinfo';
import Icon from 'react-native-vector-icons/FontAwesome';
import MatComIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import MarqueeFinancial from '../../components/MarqueeFinancial';

function Home() {
  const [hero, setHero] = useState('Superman');
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState();
  const [connectionType, setConnectionType] = useState('');
  const [isConnected, setIsConnected] = useState('');

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
        style={{flex: 1, padding: 10}}
        colors={[colors.black, colors.background, colors.black]}>
        <View>
          <Text style={{color: '#FFF'}}>a</Text>
          <Text style={{color: '#FFF'}}>a</Text>
          <Text style={{color: '#FFF'}}>a</Text>
        </View>
      </LinearGradient>
    </View>
  );
}

export default Home;
