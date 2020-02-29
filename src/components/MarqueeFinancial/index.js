import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import TextTicker from 'react-native-text-ticker';

import {colors} from '../../constants/colors';
import {ViewMarquee} from './styles';

import axios from 'axios';
import {apiFinancialMarket} from '../../config/api';

import {isEmpty} from 'lodash';

function MarqueeFinancial({hasConnection}) {
  const [showData, setShowData] = useState(false);
  const [results, setResults] = useState([]);

  function careResults(array) {
    let text = '';
    for (let i = 0; i <= array.length - 1; i++) {
      text = text + array[i] + ' | ';
    }
    return text;
  }

  useEffect(() => {
    if (hasConnection) {
      setShowData(true);
      axios.get(apiFinancialMarket.url).then(response => {
        if (!isEmpty(response.data)) {
          let array = [];

          array.push(
            'USD ' +
              response.data.results.currencies.USD.buy +
              ' ' +
              response.data.results.currencies.USD.variation,
          );

          array.push(
            'EUR ' +
              response.data.results.currencies.EUR.buy +
              ' ' +
              response.data.results.currencies.EUR.variation,
          );

          array.push(
            'Bitcoin ' +
              response.data.results.currencies.BTC.buy +
              ' ' +
              response.data.results.currencies.BTC.variation,
          );

          array.push(
            'Ibovespa ' +
              response.data.results.stocks.IBOVESPA.points +
              ' ' +
              response.data.results.stocks.IBOVESPA.variation,
          );

          array.push(
            'NASDAQ ' +
              response.data.results.stocks.NASDAQ.points +
              ' ' +
              response.data.results.stocks.NASDAQ.variation,
          );

          setResults(array);

        }
      });
    } else {
      setShowData(false);
    }
  }, []);

  return (
    <ViewMarquee>
      <TextTicker
        style={{fontSize: 14, color: colors.neon_blue}}
        duration={12000}
        loop
        bounce
        repeatSpacer={10}
        marqueeDelay={4000}>
        {showData === true ? careResults(results) : ''}
      </TextTicker>
    </ViewMarquee>
  );
}

export default MarqueeFinancial;
