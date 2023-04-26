import { ReactNode } from 'react';
import ArrowIcon from '../icons/ArrowIcon';
import { Container } from './styles';

interface CardPraticeProps {
  title: string;
  icon: ReactNode;
  color: string;
}

export default function CardPratice(props: CardPraticeProps) {
  const { title, icon, color } = props;

  return (
    <Container color={color}>
      {icon}
      <strong>{title}</strong>
      <ArrowIcon color={color} />
    </Container>
  );
}
