export interface Task {
  taskId: string;
  categoryId: string;
  name: string;
  info: string;
  location: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  backgroundColor: string;
  iconColor: string;
}
