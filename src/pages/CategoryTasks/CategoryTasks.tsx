import { useLocation, useNavigate } from 'react-router-dom';
import List from '../../components/templates/Main/List/List';
import styled from 'styled-components';
import theme from '../../theme/theme';
import Button from '../../components/atoms/Button/Button';
import TaskNumber from '../../components/atoms/TaskNumber/TaskNumber';
import TaskItems from '../../components/organisms/TaskItems/TaskItems';
import { Category, Task } from '../../types';

interface LocationState {
  category: Category;
}

const STaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.space(3)};
  background-color: ${theme.colors.white};
  height: 90vh;
  width: 100vw;
  padding: ${theme.space(8)};
  box-sizing: border-box;
  position: relative;
`;

const SButton = styled(Button)`
  border-radius: 50%;
  font-size: ${theme.fontSizes.cat};
  width: ${theme.space(15)};
  height: ${theme.space(15)};
  position: absolute;
  right: ${theme.space(12)};
  bottom: ${theme.space(12)};
`;

const CategoryTasks = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState;
  const category = state?.category;
  const storedTasksJson = localStorage.getItem('tasks');
  const storedTasks = storedTasksJson ? JSON.parse(storedTasksJson) : null;
  const tasks: Task[] = storedTasks ? storedTasks.filter((storedTask: Task) => storedTask.categoryId === category.id) : [];

  const handleGoHomeClick = () => {
    navigate('/');
  }

  const handleAddTaskClick = (category: Category) => {
    navigate('/add-task', { state: { category } });
  }

  return (
    <List
      goBack
      category={category}
      onBack={handleGoHomeClick}
    >
      <STaskList>
        <TaskNumber tasksLength={tasks.length} />

        <TaskItems
          tasks={tasks}
          category={category}
        />

        <SButton
          className="fas fa-plus"
          type="button"
          variant="primary"
          onClick={() => handleAddTaskClick(category)}
        />
      </STaskList>
    </List>
  );
}

export default CategoryTasks;
