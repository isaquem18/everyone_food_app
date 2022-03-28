import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Container
} from './styles';

export function Login () {
  const { navigate } = useNavigation<any>();

  return (
    <Container>
      <Button 
        title="entrar"
        onPress={() => {
          navigate('BottomTabsRoutes')
        }}

      />
    </Container>
  )
}