import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  margin: ${RFPercentage(3)}px 0;
`;

export const Label = styled.Text`
  color:  ${({ theme }) => theme.colors.dark};
  opacity: 0.4;
  font-family: ${({ theme }) => theme.fonts.sf_600};
  font-size: ${RFValue(15)}px;
`;

export const CustomTextInput = styled.TextInput`
  height: 50px;
  border-bottom-width: 1px;
`;

