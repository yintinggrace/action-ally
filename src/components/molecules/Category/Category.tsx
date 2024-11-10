import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import theme from '../../../theme/theme';
import Text from '../../atoms/Text/Text';
import CategoryActions from '../CategoryActions/CategoryActions';
import CategoryIcon from '../../atoms/CategoryIcon/CategoryIcon';
import { Category as CategoryType } from '../../../types';

interface CategoryProps {
  category: CategoryType;
  removeCategory: (categoryId: string) => void;
}

const SCategoryWrapper = styled.li`
  background-color: ${theme.colors.white};
  border-radius: ${theme.space(5)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease;
  aspect-ratio: 1 / 1.25;

  &:hover {
    transform: scale(1.015);
  }
`;

const SCategoryInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${theme.space(6)};
  height: 45%;
`;

const SCategoryIcon = styled(CategoryIcon)`
  margin-bottom: ${theme.space(2)};
  flex-grow: 1;
`;

const SText = styled(Text)`
  font-size: ${theme.fontSizes.ant};
  color: ${theme.colors.darkGray};
`;

const Category: React.FC<CategoryProps> = ({ category, removeCategory }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [taskLength, setTaskLength] = useState<number>(0);

  useEffect(() => {
    updateTaskLength();
  }, [category.id, location]);

  const updateTaskLength = () => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const filteredTasks = storedTasks.filter((task: { categoryId: string }) =>
      task.categoryId === category.id
    );
    setTaskLength(filteredTasks.length);
  }

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
          showCircle={true}
        />
        <SText>{category.name}</SText>
      </SCategoryInfo>

      <CategoryActions
        taskLength={taskLength}
        category={category}
        removeCategory={removeCategory}
      />
    </SCategoryWrapper>
  );
};

export default Category;
