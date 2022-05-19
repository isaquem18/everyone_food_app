import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, useWindowDimensions, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { FooterButton } from '../../../components/FooterButton';
import { TextInputComponent } from '../../../components/TextInputComponent';

import {
  Container,
  Form
} from './styles';

export function Login () {
  const { width, height } = useWindowDimensions();
  const { navigate } = useNavigation<any>();

  const handleLoginButtonClick = () => {
    navigate('BottomTabsRoutes')
  };

  return (
    <TouchableWithoutFeedback 
      style={{ flex: 1, width }}
      onPress={Keyboard.dismiss}
    >
      <Container>
        <KeyboardAvoidingView 
          behavior="position" 
          enabled 
          style={{ flex: 1 }}
          keyboardVerticalOffset={50}
        >
            <TextInputComponent label="Email address"/>
            <TextInputComponent label="Password"/>
        </KeyboardAvoidingView>
        <FooterButton 
          title="Login"
          onPress={handleLoginButtonClick}
        />
      </Container>
    </TouchableWithoutFeedback>
  )
}
