import theme from '../../../theme/theme';
import styled from 'styled-components';
import string from '../../../string';

const SText = styled.div`
  color: ${theme.colors.darkGray};
  font-size: ${theme.fontSizes.cat};
  padding: ${theme.space(3)};
  border-bottom: 1px solid ${theme.colors.mediumGray};
`;

interface TaskNumberProps {
  tasksLength: number;
}

const TaskNumber: React.FC<TaskNumberProps> = ({ tasksLength }) => {
  const itemText = tasksLength === 1 ? string.categoryTasks.item : string.categoryTasks.items;

  return (
    <SText>
      {tasksLength} {itemText}
    </SText>
  )
}

export default TaskNumber;