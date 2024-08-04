import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../../theme/theme';
import Text from '../../atoms/Text/Text';
import Icon from '../../atoms/Icon/Icon';

interface CategoryItem {
  name: string;
  icon: string;
  backgroundColor: string;
  iconColor: string;
}

interface CategoryProps {
  category: CategoryItem;
}

const SCategoryWrapper = styled.li`
  height: ${theme.space(44)};
  width: ${theme.space(38)};
  background-color: ${theme.colors.white};
  border-radius: ${theme.space(2)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const SCategoryInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${theme.space(2)};
`;

const SIcon = styled(Icon)<{ iconColor: string, backgroundColor: string }>`
  font-size: ${theme.fontSizes.cat};
  color: ${({ iconColor }) => iconColor};
  padding: ${theme.space(2.5)};
  margin-bottom: ${theme.space(2)};
  border-radius: 50%;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const SText = styled(Text)`
  font-size: ${theme.fontSizes.ant};
  color: ${theme.colors.darkGray};
`;

const Category: React.FC<CategoryProps> = ({ category }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/category-tasks', { state: { category } });
  };

  return (
    <SCategoryWrapper onClick={handleClick}>
      <SCategoryInfo>
        <SIcon
          name={category.icon}
          iconColor={category.iconColor}
          backgroundColor={category.backgroundColor}
        />
        <SText>{category.name}</SText>
      </SCategoryInfo>
    </SCategoryWrapper>
  );
};

export default Category;
