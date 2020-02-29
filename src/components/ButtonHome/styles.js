import styled from 'styled-components/native';
import {colors} from '../../constants/colors';

export const Btn = styled.TouchableOpacity`
  width: 100%;
  color: ${colors.letter};
  background-color: ${colors.blue_neon};
  border-width: 2px;
  border-color: ${colors.blue_neon};
  border-radius: 40px;

  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
  padding-right: 5px;
`;