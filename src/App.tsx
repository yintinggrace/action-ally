import GlobalStyle from './theme/GlobalStyle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <>
      <GlobalStyle />

      <Router>
        <div className="App" data-testid="App">
          <Routes>
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
