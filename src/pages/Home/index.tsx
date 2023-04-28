import { ContainerCards } from './styles';

import { cards } from '../../mock/cards';
import CardPratice from '../../components/CardPratice';
import ColumnContainer from '../../containers/ColumnContainer';
import CardProfile from '../../components/CardProfile';

export default function Home() {
  return (
    <>
      <ColumnContainer title="Knowledge base" description="Practice your knowledge base.">
        <ContainerCards>
          {cards.map((card) => (
            <CardPratice
              key={card.title}
              title={card.title}
              icon={card.icon}
              color={card.color}
              path={card.path}
            />
          ))}
        </ContainerCards>
      </ColumnContainer>

      <ColumnContainer title="User Profile" description="Follow your development">
        <div style={{ display: 'flex', gap: 16 }}>
          {cards.map((card) => (
            <CardProfile
              key={card.title}
              icon={card.icon}
              percent={card.percent}
              title={card.title}
              description={card.description}
              color={card.color}
            />
          ))}
        </div>
      </ColumnContainer>
    </>
  );
}
