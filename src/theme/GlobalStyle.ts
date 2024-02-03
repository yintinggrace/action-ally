import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  // Reset
  * {
    border: 0;
    color: ${({ theme }) => theme.colors.base};
    font-family: 'Helvetica', 'Arial', sans-serif;
    line-height: 1;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
