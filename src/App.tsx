import GlobalStyle from './theme/GlobalStyle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import SaveCategory from './pages/SaveCategory/SaveCategory';
import CategoryTasks from './pages/CategoryTasks/CategoryTasks';
import SaveTask from './pages/SaveTask/SaveTask';

const App = () => {
  return (
    <>
      <GlobalStyle />

      <Router basename={process.env.REACT_APP_BASENAME || '/'}>
        <div className="App" data-testid="App">
          <Routes>
            <Route path="/save-task" element={<SaveTask />} />
            <Route path="/category-tasks" element={<CategoryTasks />} />
            <Route path="/save-category" element={<SaveCategory />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
