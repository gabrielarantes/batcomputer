import styled from 'styled-components/native';
import {colors} from '../../constants/colors';

export const Container = styled.View`
  flex: 1;
  /*background: ${colors.background};*/
  padding-top : 15px;
  padding-bottom : 15px;
  padding-left : 15px;
  padding-right : 15px;
`;

export const TextIntro = styled.Text`
  font-size : 34px;
  color : ${colors.blue_border};
`;
