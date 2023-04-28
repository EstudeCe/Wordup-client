import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 48px;

  .header-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
    justify-content: center;

    h1 {
      font-weight: 700;
      font-size: 32px;
    }

    small {
      font-weight: 400;
      font-size: 24px;
    }
  }
`;
