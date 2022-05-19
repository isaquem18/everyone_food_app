import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ContainerProps {
  selected: boolean;
}

export const Container = styled.TouchableOpacity.attrs<ContainerProps>({
  activeOpacity: 0.8
})<ContainerProps>`
  max-width: 30%;
  min-width: 150px;
  padding: 16px 0;
  border-bottom-color: ${({ theme, selected }) => selected ? theme.colors.orange__700 : '#00000000'};
  border-bottom-width: 3px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(15)}px;
`;