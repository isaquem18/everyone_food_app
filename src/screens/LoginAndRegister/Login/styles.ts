import { Dimensions } from 'react-native';
import { RFPercentage,RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

const { height, width } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  width: ${width}px;
  height: 500px;
  background-color: ${ ({ theme }) => theme.colors.light_80};
  padding: 0 ${RFPercentage(6)}px;
  padding-top: ${height*0.1}px;
`;

export const Form = styled.View`
  width: 100%;
  margin-top: 100px;
`;