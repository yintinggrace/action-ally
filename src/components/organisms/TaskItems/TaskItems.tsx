import TaskItem from '../../molecules/TaskItem/TaskItem';
import { Task, Category } from '../../../types';
import styled from 'styled-components';
import theme from '../../../theme/theme';

interface TaskItemsProps {
  tasks: Task[];
  category: Category;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const SUl = styled.ul`
  width: 50%;

  ${theme.breakpoints.mobileOnly} {
    width: 100%;
  }

  ${theme.breakpoints.tabletUp} {
    width: 60%;
  }
`;

const TaskItems: React.FC<TaskItemsProps> = ({
  tasks, category, setTasks
}) => {
  const filteredTasks = tasks.filter(task => task.categoryId === category.id);

  return (
    <SUl>
      {filteredTasks.map((task) => (
        <TaskItem
          task={task}
          filteredTasks={filteredTasks}
          key={task.taskId}
          category={category}
          setTasks={setTasks}
        />
      ))}
    </SUl>
  )
}

export default TaskItems;
