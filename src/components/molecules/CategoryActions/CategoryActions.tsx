import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import theme from "../../../theme/theme";
import Icon from "../../atoms/Icon/Icon";
import { Category } from '../../../types';

interface CategoryActionsProps {
  taskLength: number;
  category: Category;
  categories: Category[];
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
}

const SActionsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: ${theme.space(4)};
  padding: 0 ${theme.space(4)};
  box-sizing: border-box;
`;

const SNumber = styled.div`
  font-size: ${theme.fontSizes.ant};
  color: ${theme.colors.darkGray};
`;

const SIcons = styled.div`
  display: flex;
  gap: ${theme.space(3)};
`;

const SIcon = styled(Icon)`
  font-size: ${theme.fontSizes.ant};
  color: ${theme.colors.darkGray};
  cursor: pointer;
  &:hover {
    color: ${theme.colors.mediumBlack};
  }
`;

const CategoryActions: React.FC<CategoryActionsProps> = ({ taskLength, category, categories, setCategories }) => {
  const navigate = useNavigate();

  const handleEditCategory = (event: React.MouseEvent) => {
    event.stopPropagation();
    navigate('/save-category', { state: { category } });
  };

  const handleRemoveCategory = (event: React.MouseEvent) => {
    event.stopPropagation();
    const updatedCategories = categories.filter((c) => c.id !== category.id);
    setCategories(updatedCategories);
    localStorage.setItem('categories', JSON.stringify(updatedCategories));
  };

  return (
    <SActionsWrapper>
      <SNumber>{taskLength}</SNumber>
      <SIcons>
        <SIcon
          name="fas fa-pen"
          onClick={handleEditCategory}
        />

        <SIcon
          name="fas fa-trash"
          onClick={handleRemoveCategory}
        />
      </SIcons>
    </SActionsWrapper>
  );
}

export default CategoryActions;
