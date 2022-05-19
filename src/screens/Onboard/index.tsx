import { Image, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LogoImage from '../../assets/images/logo.svg';
import {
  Container,
  Content,
  Header,
  LogoBox,
  SloganText,
  StartButton,
  ButtonText,
  ToysBox,
  Imagetoy,
  GradientFooter
} from './styles';

export function Onboard () {
  const { navigate } = useNavigation<any>();

  const handleGetStarted = () => {
    navigate('LoginAndRegister');
  };

  return (
    <>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <Container>

        <ToysBox>
          <Imagetoy source={require('../../assets/images/toys.png')} 
            style={{ left: 0, zIndex: 2 }}
          />
        </ToysBox>
        
        <Content>
          <Header>
            <LogoBox><LogoImage /></LogoBox>
            <SloganText>Food for{'\n'}Everyone</SloganText>
          </Header>
          <StartButton onPress={handleGetStarted}>
            <ButtonText>Get started</ButtonText>
          </StartButton>
        </Content>

      </Container>
    </>
  )
}