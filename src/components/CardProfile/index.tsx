import { ContainerCardProfile } from './styles';

interface CardProfileProps {
  icon: string;
  percent: number;
  title: string;
  description: string;
  color: string;
}

export default function CardProfile(props: CardProfileProps) {
  const { icon, percent, title, description, color } = props;
  return (
    <ContainerCardProfile background={color}>
      <div className="container-image">
        <img src={icon} alt="headset" />
      </div>
      <small>{percent}%</small>
      <small>{title}</small>
      <small>{description}</small>
    </ContainerCardProfile>
  );
}
