import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import theme from '../../../theme/theme';
import string from '../../../string';
import Heading from '../../atoms/Heading/Heading';
import AddCategoryButton from '../AddCategoryButton/AddCategoryButton';
import Category from '../../molecules/Category/Category';
import { Category as CategoryType } from '../../../types';

const SCategoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  gap: ${theme.space(6)};
  max-width: 600px;
  background-color: ${theme.colors.whiteTransparent};
  border-radius: ${theme.space(5)};
  padding: ${theme.space(6)};
  box-sizing: border-box;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${theme.space(7.5)};
`;

const CategoryList = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const location = useLocation();

  useEffect(() => {
    const storedCategories = JSON.parse(localStorage.getItem('categories') || '[]');
    setCategories(storedCategories);
  }, [location]);

  return (
    <SCategoriesWrapper>
      <Heading type="h3">
        {string.home.categories}
      </Heading>

      <ContentWrapper>
        {categories.map((category, index) => (
          <Category
            key={index}
            category={category}
            categories={categories}
            setCategories={setCategories}
          />
        ))}

        <AddCategoryButton />
      </ContentWrapper>
    </SCategoriesWrapper>
  );
}

export default CategoryList;
