export interface Task {
  name: string;
  taskInfo: string;
  taskLocation: string;
}

export interface Category {
  name: string;
  icon: string;
  backgroundColor: string;
  iconColor: string;
  tasks: Task[];
}
