import styled from 'styled-components/native';
import {colors} from '../../constants/colors';

export const ViewBtn = styled.View`
width: 40%;
color: ${colors.letter};
border-width: 2px;
border-color: ${colors.blue_neon};
border-radius: 400px;

padding-top: 15px;
padding-bottom: 15px;
padding-left: 5%;
padding-right: 5%;
`;

export const Btn = styled.TouchableOpacity`
  width: 40%;
  color: ${colors.letter};
  border-width: 2px;
  border-color: ${colors.blue_neon};
  border-radius: 400px;

  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 5%;
  padding-right: 5%;
  
  margin : 5%
`;
