import React, {useState} from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';

import {ListItem, Avatar} from 'react-native-elements';
import {colors} from '../../constants/colors';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import Modal from 'react-native-modal';

import {PieChart} from 'react-native-svg-charts';

function CardHero({navigation, item, image}) {
  const [hero, setHero] = useState('');
  const [modal, setModal] = useState(false);

  const [dataChart, setDataChart] = useState([
    50,
    10,
  ]);

  const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)

  const pieData = dataChart
            .filter((value) => value > 0)
            .map((value, index) => ({
                value,
                svg: {
                    fill: randomColor(),
                    onPress: () => console.log('press', index),
                },
                key: `pie-${index}`,
            }))

  return (
    <View style={{flex: 1, marginBottom: 15}}>
      <ListItem
        key={item.id}
        leftAvatar={{source: {uri: image}}}
        title={item.name}
        subtitle={item.work.occupation}
        bottomDivider
        onPress={() => {
          setHero(item);
          setModal(true);
        }}
      />

      <Modal
        hasBackdrop={true}
        onBackButtonPress={() => {
          setModal(false);
        }}
        backdropColor={colors.blue_neon}
        isVisible={modal}>
        <View
          style={{
            flex: 1,
            backgroundColor: colors.black,
            padding: 10,
            borderRadius: 7,
            alignItems: 'center',
          }}>
          <MaterialIcon
            size={30}
            name="cancel"
            color={colors.blue_beauty}
            onPress={() => {
              setModal(false);
            }}
            style={{position: 'absolute', right: 10, top: 10, zIndex: 9999}}
          />

          <Avatar
            size={300}
            source={{
              uri: image,
            }}
          />
          <Text style={{color: colors.white}}>{item.name}</Text>

          <PieChart style={{ height: 200 }} data={pieData} />

        </View>
      </Modal>
    </View>
  );
}

export default CardHero;
