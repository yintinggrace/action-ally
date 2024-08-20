import GlobalStyle from './theme/GlobalStyle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import AddCategory from './pages/AddCategory/AddCategory';
import CategoryTasks from './pages/CategoryTasks/CategoryTasks';
import SaveTask from './pages/SaveTask/SaveTask';

const App = () => {
  return (
    <>
      <GlobalStyle />

      <Router>
        <div className="App" data-testid="App">
          <Routes>
            <Route path="/add-task" element={<SaveTask />} />
            <Route path="/category-tasks" element={<CategoryTasks />} />
            <Route path="/add-category" element={<AddCategory />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
