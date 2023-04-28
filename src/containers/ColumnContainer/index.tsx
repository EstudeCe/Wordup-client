import { ReactNode } from 'react';
import { Container } from './styles';

interface ColumnContainerProps {
  title: string;
  description: string;
  children: ReactNode;
}

export default function ColumnContainer(props: ColumnContainerProps) {
  const { children, description, title } = props;

  return (
    <Container>
      <div className="header-container">
        <h1>{title}</h1>
        <small>{description}</small>
      </div>

      {children}
    </Container>
  );
}
