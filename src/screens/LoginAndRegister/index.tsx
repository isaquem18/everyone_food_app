import { useWindowDimensions, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LogoImage from '../../assets/images/logo.svg';

import {
  Container,
  Header
} from './styles';
import { Login } from './Login';
import { Register } from './Register';
import { useTheme } from 'styled-components';

const {
  Navigator,
  Screen
} = createMaterialTopTabNavigator();

export function LoginAndRegister () {
  const theme = useTheme();
  const { height, width } = useWindowDimensions();

  return (
    <>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <Container>
        <Header>
          <LogoImage width={100} height={100} />
        </Header>
        <Navigator screenOptions={{ 
          tabBarStyle: {
            justifyContent: 'flex-end',
            height: height/3,  
            width: width*0.8, 
            alignSelf: 'center',
            backgroundColor: 'transparent'
          },
          tabBarIndicatorStyle: {
            backgroundColor: 'red',
            borderRadius: 30
          },
          tabBarLabelStyle: {
            color: theme.colors.dark,
            fontFamily: theme.fonts.sf_600,
            fontSize: 16,
            textTransform: 'none'
          }
        }}>
          <Screen name="Login" component={Login} options={{ title: 'Login' }} />
          <Screen name="Register" component={Register} options={{ title: 'Sign-up' }} />
        </Navigator>
      </Container>
    </>
  )
}
