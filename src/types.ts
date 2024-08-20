export interface Task {
  categoryId: string;
  name: string;
  taskInfo: string;
  taskLocation: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  backgroundColor: string;
  iconColor: string;
}
