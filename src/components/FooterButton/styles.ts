import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  position: absolute;
  width: 100%;
  height: 70px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.orange__700};
  border-radius: 30px;
  bottom: 45px;
  align-self: center;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.poppins_600};
`;