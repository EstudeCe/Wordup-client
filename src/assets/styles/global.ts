import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Roboto', sans-serif;
  }

  body{
    background: ${(props) => props.theme.colors.black[800]};

    color: ${({ theme }) => theme.colors.black[50]};
  }

`;
