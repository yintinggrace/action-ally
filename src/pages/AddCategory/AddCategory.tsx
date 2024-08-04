import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Main from '../../components/templates/Main/Main';
import string from '../../string';
import Icon from '../../components/atoms/Icon/Icon';
import theme from '../../theme/theme';
import styled from 'styled-components';
import TextField from '../../components/atoms/TextField/TextField';
import BoxWrappers from '../../components/organisms/BoxWrappers/BoxWrappers';
import Button from '../../components/atoms/Button/Button';

const SIcon = styled(Icon)<{ backgroundColor: string; iconColor: string; }>`
  font-size: ${theme.fontSizes.eagle};
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ iconColor }) => iconColor};
  padding: ${theme.space(6)};
  margin: ${theme.space(8)};
  border-radius: 50%;
`;

const SButton = styled(Button)`
  font-size: ${theme.fontSizes.mouse};
  background-color: ${theme.colors.skyBlue};
  padding: ${theme.space(2.5)};
  width: ${theme.space(90)};
  height: ${theme.space(12)};
  border-radius: ${theme.space(5)};
`;

const SForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const STextField = styled(TextField)<{ hasError: boolean }>`
  text-align: center;
  border: ${({ hasError }) => hasError ? `2px solid ${theme.colors.terraCotta}` : 'none'};
  border-radius: ${({ hasError }) => hasError ? `${theme.space(2)}` : 'none'};
`;

const AddCategory = () => {
  const [icon, setIcon] = useState<string>('fas fa-layer-group');
  const [backgroundColor, setBackgroundColor] = useState<string>(theme.colors.lightGray);
  const [iconColor, setIconColor] = useState<string>(theme.colors.white);
  const [categoryName, setCategoryName] = useState<string>('');
  const [hasError, setHasError] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
  }

  const saveCategory = () => {
    const newCategory = {
      name: categoryName,
      icon,
      backgroundColor,
      iconColor
    };

    const existingCategories = JSON.parse(localStorage.getItem('categories') || '[]');
    existingCategories.push(newCategory);
    localStorage.setItem('categories', JSON.stringify(existingCategories));
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!categoryName.trim()) {
      setHasError(true);
      return;
    }

    setHasError(false);

    saveCategory();

    navigate('/');
  }

  return (
    <Main
      title={string.addCategory.title}
      closePage
      onClose={handleClose}
    >
      <SIcon
        name={icon}
        backgroundColor={backgroundColor}
        iconColor={iconColor}
      />

      <SForm onSubmit={handleSubmit}>
        <STextField
          value={categoryName}
          setValue={setCategoryName}
          placeholder={string.addCategory.categoryNamePlaceholder}
          name="categoryName"
          hasError={hasError}
        />

        <BoxWrappers
          setIcon={setIcon}
          setBackgroundColor={setBackgroundColor}
          setIconColor={setIconColor}
        />

        <SButton type="submit">
          {string.addCategory.buttons.addCategory}
        </SButton>
      </SForm>
    </Main>
  )
}

export default AddCategory;
