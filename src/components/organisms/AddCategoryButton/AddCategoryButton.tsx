import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../../theme/theme';
import string from '../../../string';
import Icon from '../../atoms/Icon/Icon';
import Text from '../../atoms/Text/Text';

const SLi = styled.li`
  height: ${theme.space(44)};
  width: ${theme.space(38)};
  background-color: ${theme.colors.white};
  color: ${theme.colors.darkGray};
  border-radius: ${theme.space(2)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SIcon = styled(Icon)`
  font-size: ${theme.fontSizes.cat};
  color: ${theme.colors.royalBlue};
  padding: ${theme.space(2)};
  margin-bottom: ${theme.space(2)};
`;

const SText = styled(Text)`
  color: ${theme.colors.darkGray};
`;

const AddCategoryButton = () => {
  const navigate = useNavigate();

  const handleAddCategory = () => {
    navigate('/add-category');
  };

  return (
    <SLi onClick={handleAddCategory}>
      <SIcon name="fa-solid fa-plus" />

      <SText>
        {string.home.addCategory}
      </SText>
    </SLi>
  )
}

export default AddCategoryButton;
