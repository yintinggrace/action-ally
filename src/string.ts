import colors from './theme/variables/colors';

const string = {
  home: {
    title: 'ACTION ALLY',
    slogan: 'Your Path to Productivity Starts Here',
    categories: 'Categories',
    addCategory: 'Add category',
  },
  addCategory: {
    titleAdd: 'Add Category',
    titleEdit: 'Edit Category',
    categoryNamePlaceholder: 'Enter category name...',
    backgroundColor: {
      name: 'Background color',
      colorOptions: [colors.coralPink, colors.peach, colors.lemonYellow, colors.mintGreen, colors.babyBlue, colors.lavender, colors.orchid, colors.terraCotta, colors.silver, colors.copper]
    },
    iconColor: {
      name: 'Icon color',
      colorOptions: [colors.terraCottaIcon, colors.sunflower, colors.maize, colors.fernGreen, colors.tealBlue, colors.blueViolet, colors.heliotrope, colors.russet, colors.slateGray, colors.rawUmber]
    },
    icon: {
      name: 'Icon',
      iconOptions: ['fas fa-home', 'fas fa-briefcase', 'fas fa-shopping-cart', 'fas fa-dumbbell', 'fas fa-heartbeat', 'fas fa-graduation-cap', 'fas fa-plane', 'fas fa-film', 'fas fa-wallet', 'fas fa-user-graduate']
    },
    buttons: {
      addCategory: 'Add the category',
      save: 'Save'
    }
  },
  categoryTasks: {
    item: 'item',
    items: 'items'
  },
  addTask: {
    titleAdd: 'Add Task',
    titleEdit: 'Edit Task',
    taskNamePlaceholder: 'Enter task name...',
    infoPlaceholder: 'Enter additional info... (optional)',
    locationPlaceholder: 'Enter location... (optional)',
    addTask: 'Add the task',
    save: 'Save'
  }
}

export default string;
