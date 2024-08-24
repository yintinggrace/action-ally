import styled from "styled-components";
import theme from "../../../theme/theme";

interface CategoryActionsProps {
  taskLength: number;
}

const SCategoryActions = styled.div`
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

const CategoryActions: React.FC<CategoryActionsProps> = ({ taskLength }) => {
  return (
    <SCategoryActions>
      <SNumber>{taskLength}</SNumber>
    </SCategoryActions>
  );
}

export default CategoryActions;
