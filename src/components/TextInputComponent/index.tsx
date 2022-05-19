import {
  Container,
  CustomTextInput,
  Label
} from './styles';

interface Props {
  label: string;
}

export function TextInputComponent ({
  label
}: Props) {

  return (
    <Container>
      <Label>{label}</Label>
      <CustomTextInput />
    </Container>
  )
}