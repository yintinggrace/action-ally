import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import List from '../../components/organisms/List/List';
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
  overflow-y: scroll;
  padding-bottom: ${theme.space(40)};
`;

const SButton = styled(Button)`
  border-radius: 50%;
  font-size: ${theme.fontSizes.cat};
  width: ${theme.space(15)};
  height: ${theme.space(15)};
  position: fixed;
  right: ${theme.space(12)};
  bottom: ${theme.space(12)};
  transition: transform 0.3s ease, background-color 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    background-color: ${theme.colors.mediumBlack};
  }
`;

const CategoryTasks = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState;
  const category = state?.category;
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const storedTasksJson = localStorage.getItem('tasks');
    const storedTasks = storedTasksJson ? JSON.parse(storedTasksJson) : [];
    const filteredTasks = storedTasks.filter((task: Task) => task.categoryId === category.id);

    setTasks(filteredTasks);
  }, []);

  const handleGoHomeClick = () => {
    navigate('/');
  }

  const handleAddTaskClick = (category: Category) => {
    navigate('/save-task', { state: { category } });
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
          setTasks={setTasks}
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
