import { TouchableOpacityProps } from 'react-native';
import {
  Container,
  ButtonText
} from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
}

export function FooterButton ({
  title,
  onPress
}: Props) {

  return (
    <Container onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </Container>
  )
}