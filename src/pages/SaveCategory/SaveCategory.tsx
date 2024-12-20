import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Main from '../../components/templates/Main/Main';
import string from '../../string';
import theme from '../../theme/theme';
import styled from 'styled-components';
import TextField from '../../components/atoms/TextField/TextField';
import BoxWrappers from '../../components/organisms/BoxWrappers/BoxWrappers';
import Button from '../../components/atoms/Button/Button';
import { Category } from '../../types';
import CategoryIcon from '../../components/atoms/CategoryIcon/CategoryIcon';

interface LocationState {
  category?: Category;
}

const SCategoryIcon = styled(CategoryIcon)`
  margin: ${theme.space(8)};
`;

const SButton = styled(Button)`
  font-size: ${theme.fontSizes.mouse};
  background-color: ${theme.colors.skyBlue};
  padding: ${theme.space(2.5)};
  width: ${theme.space(90)};
  height: ${theme.space(12)};
  border-radius: ${theme.space(5)};
  transition: transform 0.3s ease, background-color 0.3s ease;
  width: 100%;
  &:hover {
    transform: scale(1.01);
  }
  &:active {
    background-color: ${theme.colors.mediumBlack};
  }
`;

const SForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 200px;
`;

const STextField = styled(TextField)<{ hasError: boolean }>`
  text-align: center;
  border: 2px solid ${({ hasError }) => hasError ? theme.colors.terraCotta : theme.colors.mediumGray};
  border-radius: ${theme.space(2)};
  padding: ${theme.space(2)} 0;
  &::placeholder {
    color: ${theme.colors.mediumGray};
  }
`;

const SaveCategory = () => {
  const location = useLocation();
  const state = location.state as LocationState;
  const category = state?.category;

  const [icon, setIcon] = useState<string>(category?.icon || 'faLayerGroup');
  const [backgroundColor, setBackgroundColor] = useState<string>(category?.backgroundColor || theme.colors.lightGray);
  const [iconColor, setIconColor] = useState<string>(category?.iconColor || theme.colors.white);
  const [categoryName, setCategoryName] = useState<string>(category?.name || '');
  const [hasError, setHasError] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
  }

  const saveCategory = () => {
    const newCategory = {
      id: uuidv4(),
      name: categoryName,
      icon,
      backgroundColor,
      iconColor
    };

    const existingCategories = JSON.parse(localStorage.getItem('categories') || '[]');

    if (category) { // Is editing category
      const updatedCategories = existingCategories.map((existingCategory: Category) =>
         existingCategory.id === category.id
          ? {
            ...existingCategory,
            name: newCategory.name,
            icon: newCategory.icon,
            backgroundColor: newCategory.backgroundColor,
            iconColor: newCategory.iconColor
          } : existingCategory
      );

      localStorage.setItem('categories', JSON.stringify(updatedCategories));
    } else { // Is adding new category
      existingCategories.push(newCategory);
      localStorage.setItem('categories', JSON.stringify(existingCategories));
    }
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
      title={category ? string.saveCategory.titleEdit : string.saveCategory.titleAdd}
      closePage
      onClose={handleClose}
    >
      <SCategoryIcon
        name={icon}
        backgroundColor={backgroundColor}
        iconColor={iconColor}
        size={20}
        showCircle={true}
      />

      <SForm onSubmit={handleSubmit}>
        <STextField
          value={categoryName}
          setValue={setCategoryName}
          placeholder={string.saveCategory.categoryNamePlaceholder}
          name="categoryName"
          hasError={hasError}
        />

        <BoxWrappers
          setIcon={setIcon}
          setBackgroundColor={setBackgroundColor}
          setIconColor={setIconColor}
        />

        <SButton type="submit">
          {category ? string.saveCategory.buttons.save : string.saveCategory.buttons.addCategory}
        </SButton>
      </SForm>
    </Main>
  )
}

export default SaveCategory;
