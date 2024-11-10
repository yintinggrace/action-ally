import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import theme from '../../../theme/theme';
import string from '../../../string';
import Heading from '../../atoms/Heading/Heading';
import AddCategoryButton from '../AddCategoryButton/AddCategoryButton';
import Category from '../../molecules/Category/Category';
import { Task, Category as CategoryType } from '../../../types';

const SCategoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  gap: ${theme.space(6)};
  max-width: 800px;
  background-color: ${theme.colors.whiteTransparent};
  border-radius: ${theme.space(5)};
  padding: ${theme.space(6)};
  box-sizing: border-box;
`;

const SContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.space(3)};

  ${theme.breakpoints.tabletUp} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const CategoryList = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const location = useLocation();

  useEffect(() => {
    const storedCategories = JSON.parse(localStorage.getItem('categories') || '[]');
    setCategories(storedCategories);

    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    setTasks(storedTasks);
  }, [location]);

  const removeCategory = (categoryId: string) => {
    const updatedCategories = categories.filter(c => c.id !== categoryId);
    setCategories(updatedCategories);
    localStorage.setItem('categories', JSON.stringify(updatedCategories));
    removeAssociatedTasks(categoryId);
  };

  const removeAssociatedTasks = (categoryId: string) => {
    const updatedTasks = tasks.filter(t => t.categoryId !== categoryId);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <SCategoriesWrapper>
      <Heading type="h3">
        {string.home.categories}
      </Heading>

      <SContentWrapper>
        {categories.map((category) => (
          <Category
            key={category.id}
            category={category}
            removeCategory={removeCategory}
          />
        ))}

        <AddCategoryButton />
      </SContentWrapper>
    </SCategoriesWrapper>
  );
}

export default CategoryList;
