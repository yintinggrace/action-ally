import { useNavigate } from 'react-router-dom';
import theme from '../../../theme/theme';
import styled from 'styled-components';
import Checkbox from '../../atoms/Checkbox/Checkbox';
import Icon from '../../atoms/Icon/Icon';
import { Task, Category } from '../../../types';

interface TaskItemProps {
  task: Task;
  category: Category;
}

const SLi = styled.li`
  padding: ${theme.space(3)};
  border-bottom: 1px solid ${theme.colors.mediumGray};
  display: flex;
`;

const SDetails = styled.div`
  padding: 0 ${theme.space(6)};
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${theme.space(1)}
`;

const SText = styled.div`
  color: ${theme.colors.black};
  list-style-type: none;
  font-size: ${theme.fontSizes.mouse};
  font-weight: bold;
`;

const SInfoLocation = styled.div`
  display: flex;
  & > * {
    font-style: italic;
    color: ${theme.colors.darkGray};
    font-weight: normal;
  }
`;

const SSeparator = styled.span`
  color: ${theme.colors.mediumGray};
  margin: 0 ${theme.space(2)};
`;

const SIcon = styled(Icon)`
  color: ${theme.colors.darkGray};
  font-size: ${theme.fontSizes.mouse};
  padding: ${theme.space(3)};
`;

const TaskItem: React.FC<TaskItemProps> = ({
  task, category
}) => {
  const navigate = useNavigate();

  const handleEditClick = ( task: Task ) => {
    navigate('/add-task', { state: { task, category } });
  };

  return (
    <SLi>
      <Checkbox />

      <SDetails>
        <SText>{task.name}</SText>

        {(task.info || task.location) && (
          <SInfoLocation>
            {task.info && (
              <SText>{task.info}</SText>
            )}

            {task.info && task.location && (
              <SSeparator>|</SSeparator>
            )}

            {task.location && (
              <SText>{task.location}</SText>
            )}
          </SInfoLocation>
        )}
      </SDetails>

      <SIcon
        name="fas fa-pen"
        onClick={() => handleEditClick(task)}
      />

      <SIcon name="fas fa-trash" />
    </SLi>
  )
}

export default TaskItem;
