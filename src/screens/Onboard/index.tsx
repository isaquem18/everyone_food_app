import { Image } from 'react-native';
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
  ImageGirltoy,
  ImageMantoy,
  GradientFooter
} from './styles';

export function Onboard () {
  const { navigate } = useNavigation<any>();

  const handleGetStarted = () => {
    navigate('Login');
  };

  return (
    <Container>
      
      <Content>
        <Header>
          <LogoBox><LogoImage /></LogoBox>
          <SloganText>Food for{'\n'}Everyone</SloganText>
        </Header>
        <StartButton onPress={handleGetStarted}>
          <ButtonText>Get started</ButtonText>
        </StartButton>
      </Content>
      <ToysBox>
        <ImageGirltoy source={require('../../assets/images/girl.png')} 
          style={{ left: 0, zIndex: 2 }}
        />
        <ImageMantoy source={require('../../assets/images/man.png')} 
          style={{ right: 0, zIndex: 1 }}
        />
        <GradientFooter />
      </ToysBox>
    </Container>
  )
}