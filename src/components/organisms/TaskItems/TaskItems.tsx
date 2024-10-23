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
  return (
    <SUl>
      {tasks.map((task, index) => (
        <TaskItem
          tasks={tasks}
          task={task}
          key={index}
          category={category}
          setTasks={setTasks}
        />
      ))}
    </SUl>
  )
}

export default TaskItems;
