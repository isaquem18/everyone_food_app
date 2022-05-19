import {
  Container,
  Title
} from './styles';

interface Props {
  selected: boolean;
  title: string;
}

export function Tab ({
  selected=false,
  title=""
}: Props) {

  return (
    <Container selected={selected}>
      <Title>{title}</Title>
    </Container>
  )
}