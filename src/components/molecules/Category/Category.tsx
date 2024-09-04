import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../../theme/theme';
import Text from '../../atoms/Text/Text';
import Icon from '../../atoms/Icon/Icon';
import CategoryActions from '../CategoryActions/CategoryActions';

interface CategoryItem {
  id?: string;
  name: string;
  icon: string;
  backgroundColor: string;
  iconColor: string;
}

interface CategoryProps {
  category: CategoryItem;
}

const SCategoryWrapper = styled.li`
  height: ${theme.space(40)};
  width: ${theme.space(35)};
  background-color: ${theme.colors.white};
  border-radius: ${theme.space(5)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
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
  const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
  const filteredTasks = tasks.filter((task: { categoryId: string }) =>
    task.categoryId === category.id
  );

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

      <CategoryActions
        taskLength={filteredTasks.length}
        category={category}
      />
    </SCategoryWrapper>
  );
};

export default Category;
