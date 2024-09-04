import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import theme from "../../../theme/theme";
import Icon from "../../atoms/Icon/Icon";

interface CategoryItem {
  id?: string;
  name: string;
  icon: string;
  backgroundColor: string;
  iconColor: string;
}

interface CategoryActionsProps {
  taskLength: number;
  category: CategoryItem;
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

const SIcon = styled(Icon)`
  font-size: ${theme.fontSizes.ant};
  color: ${theme.colors.darkGray};
  cursor: pointer;
  &:hover {
    color: ${theme.colors.mediumBlack};
  }
`;

const CategoryActions: React.FC<CategoryActionsProps> = ({ taskLength, category }) => {
  const navigate = useNavigate();

  const handleEditCategory = (event: React.MouseEvent) => {
    event.stopPropagation();
    navigate('/add-category', { state: { category } });
  };

  return (
    <SActionsWrapper>
      <SNumber>{taskLength}</SNumber>
      <SIcon
        name="fas fa-pen"
        onClick={handleEditCategory}
      />
    </SActionsWrapper>
  );
}

export default CategoryActions;
