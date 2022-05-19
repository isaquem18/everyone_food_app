import { Dimensions } from 'react-native';
import { RFPercentage,RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

const { height } = Dimensions.get('window');

export const Container = styled.View`
  background-color: ${ ({ theme }) => theme.colors.light_80};
  flex: 1;
`;
