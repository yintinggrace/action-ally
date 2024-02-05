import GlobalStyle from './theme/GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <>
      <GlobalStyle />

      <div className="App" data-testid="App">
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
