import styled from 'styled-components';

export const Container = styled.aside`
  background: ${(props) => props.theme.colors.black[900]};

  width: 80px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 48px 0;

  .logo {
    font-size: 32px;
    font-weight: 700;

    span {
      font-weight: 200;
    }
  }

  .container-navbar {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 48px;
  }

  .container-footer {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 48px;
  }
`;
