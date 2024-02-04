import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import GlobalStyle from './theme/GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <div className="App" data-testid="App">
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
