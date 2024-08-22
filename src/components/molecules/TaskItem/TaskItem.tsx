import { useNavigate } from 'react-router-dom';
import theme from '../../../theme/theme';
import styled from 'styled-components';
import Checkbox from '../../atoms/Checkbox/Checkbox';
import Icon from '../../atoms/Icon/Icon';
import Heading from '../../atoms/Heading/Heading';
import Text from '../../atoms/Text/Text';
import { Task, Category } from '../../../types';

interface TaskItemProps {
  task: Task;
  tasks: Task[];
  category: Category;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const SLi = styled.li`
  padding: ${theme.space(3)};
  border-bottom: 1px solid ${theme.colors.mediumGray};
  display: flex;
`;

const SDetails = styled.div`
  line-height: ${theme.space(6)};
  padding: 0 ${theme.space(6)};
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: ${theme.space(1)};
`;

const SHeading = styled(Heading)`
  color: ${theme.colors.black};
`;

const SText = styled(Text)`
  font-size: ${theme.fontSizes.ant};
  font-weight: normal;
  color: ${theme.colors.darkGray};
  margin-top: ${theme.space(1)};
  font-style: italic;
`;

const SIcon = styled(Icon)`
  color: ${theme.colors.darkGray};
  font-size: ${theme.fontSizes.mouse};
  padding: ${theme.space(3)};
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    color: ${theme.colors.mediumBlack};
  }
`;

const TaskItem: React.FC<TaskItemProps> = ({
  task, tasks, category, setTasks
}) => {
  const navigate = useNavigate();

  const handleEditClick = ( task: Task ) => {
    navigate('/add-task', { state: { task, category } });
  };

  const handleRemoveTask = () => {
    const updatedTasks = tasks.filter((t) => t.taskId !== task.taskId);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <SLi>
      <Checkbox
        checked={false}
        onChange={handleRemoveTask}
      />

      <SDetails>
        <SHeading type="h3">{task.name}</SHeading>

        {task.info && (
          <SText>{task.info}</SText>
        )}

        {task.location && (
          <SText>{task.location}</SText>
        )}
      </SDetails>

      <SIcon
        name="fas fa-pen"
        onClick={() => handleEditClick(task)}
      />

      <SIcon
        name="fas fa-trash"
        onClick={handleRemoveTask}
      />
    </SLi>
  )
}

export default TaskItem;
