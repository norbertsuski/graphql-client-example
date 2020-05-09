import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
  }

  h1 {
    font-weight: normal;
    font-size: 3rem;
  }
`;

