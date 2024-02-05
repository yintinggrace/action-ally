import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  // Reset
  * {
    border: 0;
    color: ${theme.colors.white};
    font-family: 'Helvetica', 'Arial', sans-serif;
    font-size: ${theme.fontSizes.mouse};
    line-height: 1;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
