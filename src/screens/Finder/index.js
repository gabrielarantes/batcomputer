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
import CardHero from '../../components/CardHero'

import {Container, Logo} from './styles';

import {colors} from '../../constants/colors';
import {isEmpty} from 'lodash';

import axios from 'axios';

import {apiUrl, api} from '../../config/api';

import NetInfo from "@react-native-community/netinfo";

function Finder() {
  const [hero, setHero] = useState('Superman');
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState();

  useEffect(() => {
		NetInfo.addEventListener(state => {
			//console.warn('Connection type', state.type);
			//console.warn('Is connected?', state.isConnected);
    });
  },[]);

  const findHero = () => {
    if (!isEmpty(hero)) {
      setLoading(true);
      setItems('');

      //searching heroes

      axios
        .get(apiUrl + api.search + hero)
        .then(function(response) {
          // handle success
          setItems(response.data.results);
          setLoading(false);
        })
        .catch(function(error) {
          // handle error
          console.log(error);
          setLoading(false);
        });
    }

    
  };

  const handleText = hero => {
    setHero(hero);
  };

  function renderItem(item) {
    return (
      <CardHero item={item} image={item.image.url} />
    );
  }

  return (
    <LinearGradient
      style={{flex: 1 , padding: 10}}
      colors={['#000000', colors.background, '#000000']}
      //colors={['#FFFFFF', '#FFFFFF']}
      >
      
        <View style={{flexDirection: 'row'}}>
          <View style={{width: '85%'}}>
            <Input onChangeText={handleText} value={hero} />
          </View>

          <View style={{width: '5%'}}></View>

          <View style={{width: '10%'}}>
            <Button onPress={() => findHero()} title={'OK'} />
          </View>
        </View>

        {loading && <Loading />}

        <View style={{flex: 1, marginTop : 15}}>
          {!isEmpty(items) && (
            <FlatList
              style={{flex: 1, background: 'blue'}}
              data={items}
              keyExtractor={item => item.id}
              renderItem={({item}) => renderItem(item)}
            />
          )}
        </View>
      
    </LinearGradient>
  );
}

export default Finder;
