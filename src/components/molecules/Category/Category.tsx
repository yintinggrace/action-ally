import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../../theme/theme';
import Text from '../../atoms/Text/Text';
import CategoryActions from '../CategoryActions/CategoryActions';
import CategoryIcon from '../../atoms/CategoryIcon/CategoryIcon';

interface CategoryItem {
  id?: string;
  name: string;
  icon: string;
  backgroundColor: string;
  iconColor: string;
}

interface CategoryProps {
  category: CategoryItem;
  categories: CategoryItem[];
  setCategories: React.Dispatch<React.SetStateAction<CategoryItem[]>>;
}

const SCategoryWrapper = styled.li`
  height: ${theme.space(40)};
  width: ${theme.space(30)};
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

  ${theme.breakpoints.tabletUp} {
    width: ${theme.space(35)};
  }
`;

const SCategoryInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${theme.space(6)};
`;

const SCategoryIcon = styled(CategoryIcon)`
  margin-bottom: ${theme.space(2)};
`;

const SText = styled(Text)`
  font-size: ${theme.fontSizes.ant};
  color: ${theme.colors.darkGray};
`;

const Category: React.FC<CategoryProps> = ({ category, categories, setCategories }) => {
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
        <SCategoryIcon
          name={category.icon}
          iconColor={category.iconColor}
          backgroundColor={category.backgroundColor}
          size={9}
        />
        <SText>{category.name}</SText>
      </SCategoryInfo>

      <CategoryActions
        taskLength={filteredTasks.length}
        category={category}
        categories={categories}
        setCategories={setCategories}
      />
    </SCategoryWrapper>
  );
};

export default Category;
