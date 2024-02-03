import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import GlobalStyle from './theme/GlobalStyle';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App" data-testid="App" />
    </ThemeProvider>
  );
}

export default App;
