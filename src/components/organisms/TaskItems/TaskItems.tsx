import TaskItem from '../../molecules/TaskItem/TaskItem';
import { Task, Category } from '../../../types';

interface TaskItemsProps {
  tasks: Task[];
  category: Category;
}

const TaskItems: React.FC<TaskItemsProps> = ({
  tasks, category
}) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem
          task={task}
          key={index}
          category={category}
        />
      ))}
    </ul>
  )
}

export default TaskItems;
