import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Main from '../../components/templates/Main/Main';
import string from '../../string';
import CategoryIcon from '../../components/atoms/CategoryIcon/CategoryIcon';
import styled from 'styled-components';
import theme from '../../theme/theme';
import TextField from '../../components/atoms/TextField/TextField';
import Button from '../../components/atoms/Button/Button';
import { Category, Task } from '../../types';

interface LocationState {
  category: Category;
  task?: Task;
}

const SCategoryIcon = styled(CategoryIcon)`
  margin: ${theme.space(15)};
`;

const SForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${theme.space(5)};
  width: 100%;
  max-width: ${theme.space(150)};
`;

const STextField = styled(TextField)<{ hasError?: boolean }>`
  font-size: ${theme.fontSizes.mouse};
  padding-bottom: ${theme.space(3)};
  border-bottom: 1px solid ${theme.colors.lightGray};
  font-style: normal;
  color: ${theme.colors.white}
  &::placeholder {
    color: ${({ hasError }) => hasError ? `${theme.colors.terraCotta}` : theme.colors.mediumGray};
    font-style: italic;
  }
`;

const SButton = styled(Button)`
  font-size: ${theme.fontSizes.mouse};
  background-color: ${theme.colors.skyBlue};
  padding: ${theme.space(3)};
  width: ${theme.space(80)};
  height: ${theme.space(12)};
  border-radius: ${theme.space(5)};
  margin-top: ${theme.space(10)};
  width: 100%;
  transition: transform 0.3s ease, background-color 0.3s ease;
  &:hover {
    transform: scale(1.01);
  }
  &:active {
    background-color: ${theme.colors.mediumBlack};
  }
`;

const SaveTask = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState;
  const category = state?.category;
  const task = location.state?.task;

  const [taskName, setTaskName] = useState<string>(task?.name || '');
  const [taskInfo, setTaskInfo] = useState<string>(task?.info || '');
  const [taskLocation, setTaskLocation] = useState<string>(task?.location || '');
  const [hasError, setHasError] = useState<boolean>(false);

  const handleClose = () => {
    navigate(-1);
  }

  const saveTask = () => {
    const newTask: Task = {
      taskId: task?.taskId || uuidv4(),
      categoryId: category.id,
      name: taskName,
      info: taskInfo,
      location: taskLocation
    };

    const existingTasksJson = localStorage.getItem('tasks');
    const existingTasks = existingTasksJson ? JSON.parse(existingTasksJson) : [];

    if (task) { // Is editing task
      const updatedTasks = existingTasks.map((existingTask: Task) =>
         existingTask.taskId === task.taskId
          ? {
            ...existingTask,
            name: newTask.name,
            info: newTask.info,
            location: newTask.location
          } : existingTask
      );

      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    } else { // Is adding new task
      existingTasks.push(newTask);
      localStorage.setItem('tasks', JSON.stringify(existingTasks));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!taskName.trim()) {
      setHasError(true);
      return;
    }

    setHasError(false);

    saveTask();

    navigate(-1);
  }

  return (
    <Main
      title={task ? string.addTask.titleEdit : string.addTask.titleAdd}
      closePage
      onClose={handleClose}
    >
      <SCategoryIcon
        name="fas fa-tasks"
        size={40}
      />

      <SForm onSubmit={handleSubmit}>
        <STextField
          value={taskName}
          name="taskName"
          placeholder={string.addTask.taskNamePlaceholder}
          setValue={setTaskName}
          hasError={hasError}
        />
        <STextField
          value={taskInfo}
          name="taskInfo"
          placeholder={string.addTask.infoPlaceholder}
          setValue={setTaskInfo}
        />
        <STextField
          value={taskLocation}
          name="taskLocation"
          placeholder={string.addTask.locationPlaceholder}
          setValue={setTaskLocation}
        />
        <SButton type="submit">
          {task ? string.addTask.save : string.addTask.addTask}
        </SButton>
      </SForm>
    </Main>
  )
}

export default SaveTask;
