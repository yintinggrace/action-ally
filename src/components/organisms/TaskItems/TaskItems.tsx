import TaskItem from '../../molecules/TaskItem/TaskItem';
import { Task } from '../../../types';

interface TaskItemsProps {
  tasks: Task[];
}

const TaskItems: React.FC<TaskItemsProps> = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem task={task} key={index} />
      ))}
    </ul>
  )
}

export default TaskItems;
