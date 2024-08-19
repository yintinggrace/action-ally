import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Main from '../../components/templates/Main/Main';
import string from '../../string';
import Icon from '../../components/atoms/Icon/Icon';
import styled from 'styled-components';
import theme from '../../theme/theme';
import TextField from '../../components/atoms/TextField/TextField';
import Button from '../../components/atoms/Button/Button';
import { Category, Task } from '../../types';

interface LocationState {
  category: Category;
}

const SIcon = styled(Icon)`
  font-size: ${theme.fontSizes.whale};
  background-color: ${theme.colors.lightGray};
  padding: ${theme.space(15)};
  margin: ${theme.space(15)};
  border-radius: 50%;
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
  &::placeholder {
    color: ${({ hasError }) => hasError ? `${theme.colors.terraCotta}` : theme.colors.lightGray};
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
`;

const AddTask = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState;
  const category = state?.category;

  const [taskName, setTaskName] = useState<string>('');
  const [taskInfo, setTaskInfo] = useState<string>('');
  const [taskLocation, setTaskLocation] = useState<string>('');
  const [hasError, setHasError] = useState<boolean>(false);

  const handleClose = () => {
    navigate(-1);
  }

  const saveTask = () => {
    const storedCategoryJson = localStorage.getItem(category.name);
    let storedCategory: Category | null = storedCategoryJson ? JSON.parse(storedCategoryJson) : null;

    if (!storedCategory) {
      storedCategory = { ...category, tasks: [] };
    }

    if (!Array.isArray(storedCategory.tasks)) {
      storedCategory.tasks = [];
    }

    const newTask: Task = {
      name: taskName,
      taskInfo: taskInfo,
      taskLocation: taskLocation
    };

    storedCategory.tasks.push(newTask);
    localStorage.setItem(category.name, JSON.stringify(storedCategory));
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
      title={string.addTask.title}
      closePage
      onClose={handleClose}
    >
      <SIcon name="fas fa-tasks" />

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
        <SButton
          variant="primary"
          type="submit"
        >
          {string.addTask.addTask}
        </SButton>
      </SForm>
    </Main>
  )
}

export default AddTask;
