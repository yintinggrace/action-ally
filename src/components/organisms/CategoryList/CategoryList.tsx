import styled from 'styled-components';
import theme from '../../../theme/theme';
import string from '../../../string';
import Heading from '../../atoms/Heading/Heading';
import AddCategoryButton from '../AddCategoryButton/AddCategoryButton';

const SCategoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${theme.space(7.5)};
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: ${theme.space(7.5)};
`;

const CategoryList = () => {
  return (
    <SCategoriesWrapper>
      <Heading type="h3">
        {string.home.categories}
      </Heading>

      <ContentWrapper>
        <AddCategoryButton />
      </ContentWrapper>
    </SCategoriesWrapper>
  );
}

export default CategoryList;
