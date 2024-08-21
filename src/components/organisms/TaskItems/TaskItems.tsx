import TaskItem from '../../molecules/TaskItem/TaskItem';
import { Task, Category } from '../../../types';

interface TaskItemsProps {
  tasks: Task[];
  category: Category;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskItems: React.FC<TaskItemsProps> = ({
  tasks, category, setTasks
}) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem
          tasks={tasks}
          task={task}
          key={index}
          category={category}
          setTasks={setTasks}
        />
      ))}
    </ul>
  )
}

export default TaskItems;
