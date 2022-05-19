import { Dimensions } from 'react-native';
import { RFPercentage,RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

const { height } = Dimensions.get('window');

export const Container = styled.View`
  background-color: ${ ({ theme }) => theme.colors.light_80};
  flex: 1;
`;

export const Header = styled.View`
  height: ${height/3}px;
  width: 100%;
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;

  align-items: center;
  justify-content: center;

`;

export const LogoImage = styled.Image``;

export const Tabs = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  margin-top: ${RFValue(height * 0.05)}px;
`;