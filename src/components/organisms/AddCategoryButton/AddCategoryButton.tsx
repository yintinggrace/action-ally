import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../../theme/theme';
import Button from '../../atoms/Button/Button';

const SButton = styled(Button)`
  border-radius: 50%;
  font-size: ${theme.fontSizes.cat};
  width: ${theme.space(15)};
  height: ${theme.space(15)};
  position: fixed;
  right: ${theme.space(12)};
  bottom: ${theme.space(12)};
  transition: transform 0.3s ease, background-color 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    background-color: ${theme.colors.mediumBlack};
  }
`;

const AddCategoryButton = () => {
  const navigate = useNavigate();

  const handleAddCategory = () => {
    navigate('/add-category');
  };

  return (
    <SButton
      className="fas fa-plus"
      type="button"
      variant="primary"
      onClick={handleAddCategory}
    />
  )
}

export default AddCategoryButton;
