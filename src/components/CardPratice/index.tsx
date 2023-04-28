import ArrowIcon from '../icons/ArrowIcon';
import { Container } from './styles';
import { Link } from 'react-router-dom';

interface CardPraticeProps {
  title: string;
  icon: string;
  color: string;
  path: string;
}

export default function CardPratice(props: CardPraticeProps) {
  const { title, icon, color, path } = props;

  return (
    <Link to={path}>
      <Container color={color}>
        <img src={icon} alt={title} />
        <strong>{title}</strong>
        <ArrowIcon color={color} />
      </Container>
    </Link>
  );
}
