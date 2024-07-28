import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  // Reset
  * {
    border: 0;
    color: ${theme.colors.white};
    font-family: 'Helvetica', 'Arial', sans-serif;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${theme.colors.royalBlue};
  }
`;

export default GlobalStyle;
