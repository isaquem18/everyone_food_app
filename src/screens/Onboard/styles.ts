import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';
import {  RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

const { height, width } = Dimensions.get('window');

export const Container = styled.View`
  background-color: ${ ({ theme }) => theme.colors.orange__750};
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  padding: ${RFValue(height*0.07)}px ${RFPercentage(6)}px ${RFPercentage(5)}px ${RFPercentage(6)}px;
  justify-content: space-between;
`;


export const Header = styled.View`
  height: ${height * 0.26}px; 
  justify-content: space-between;
`;

export const LogoBox = styled.View`
  background-color: ${({ theme }) => theme.colors.light};
  height: ${RFValue(60)}px;
  width: ${RFValue(60)}px;;
  border-radius: 70px;

  overflow: hidden;

  align-items: center;
  justify-content: center;

`;

export const LogoImage = styled.Image`
  width: ${RFValue(45)}px;
  height: ${RFValue(45)}px;
`;

export const SloganText = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.sf_800};
  font-size: ${RFValue(height * 0.07)}px; 
`;


export const StartButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9
})`
  background-color: ${({ theme }) => theme.colors.light};
  height: ${RFValue(60)}px

  border-radius: 30px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.orange__500};
  font-family: ${({ theme }) => theme.fonts.sf_600};
  font-size: ${RFValue(17)}px; 
`;

export const ToysBox = styled.View`
  position: absolute;
  width: ${width}px;
  height: ${RFValue(height/2.3)}px;
  bottom: ${RFPercentage(height/80)}px;
  overflow: visible;

`;

export const Imagetoy = styled.Image.attrs({
  resizeMode: 'cover'
})`
  width: ${width}px;
  height: ${RFValue(height/2.3)}px;
  overflow: visible;
`;


export const GradientFooter = styled(LinearGradient).attrs(({ theme }) => ({
  colors: [ '#ffffff00', `${theme.colors.orange__750}` ],

}))`
  position: absolute;
  width: 100%;
  height: 50%;
  bottom: 0;
  z-index: 3;
`;