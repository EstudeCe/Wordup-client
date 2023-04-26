import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 48px;

  width: 100%;
  padding: 24px;

  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    h1 {
      font-weight: 400;
      font-size: 32px;
      margin-bottom: 8px;
    }

    small {
      font-size: 16px;
    }

    .container-user-info {
      display: flex;
      flex-direction: row;
      gap: 24px;
    }
  }

  .container-section {
    display: flex;
    flex-direction: column;
    gap: 48px;

    .header-section {
      h1 {
        font-weight: 700;
        font-size: 32px;
      }

      small {
        font-weight: 400;
        font-size: 24px;
      }
    }

    .container-cards {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 32px;
    }
  }
`;
