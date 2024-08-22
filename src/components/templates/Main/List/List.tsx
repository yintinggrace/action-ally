import { ReactNode } from 'react';
import styled from 'styled-components';
import theme from '../../../../theme/theme';
import Heading from '../../../atoms/Heading/Heading';
import Icon from '../../../atoms/Icon/Icon';
import { Category } from '../../../../types';

interface ListProps {
  children?: ReactNode;
  className?: string;
  goBack?: boolean;
  category?: Category;
  onBack?: () => void;
}

const SList = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const SHeader = styled.header`
  height: ${theme.space(25)};
  display: flex;
  justify-content: center;
  position: relative;
`;

const SGoBackIcon = styled(Icon)`
  font-size: ${theme.fontSizes.eagle};
  cursor: pointer;
  display: flex;
  align-items: center;
  position: absolute;
  left: ${theme.space(10)};
  height: 100%;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    color: ${theme.colors.mediumBlack};
  }
`;

const SCategoryIcon = styled(Icon)`
  color: ${({ iconColor }) => iconColor};
  background-color: ${({ backgroundColor }) => backgroundColor};
  font-size: ${theme.fontSizes.cat};
  padding: ${theme.space(3)};
  border-radius: 50%;
`;

const STitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.space(3)};
`;

const SContent = styled.div`
  background-color: ${theme.colors.white};
`;

const List: React.FC<ListProps> = ({
  children,
  category,
  goBack,
  onBack: handleGoBack
}) => {
  const title = category?.name;
  const categoryIcon = category?.icon;

  return (
    <SList>
      <SHeader>
        {goBack && (
          <SGoBackIcon name="fas fa-arrow-left" onClick={handleGoBack} />
        )}

        <STitleWrapper>
          {categoryIcon && (
            <SCategoryIcon
              name={categoryIcon}
              iconColor={category.iconColor}
              backgroundColor={category.backgroundColor}
            />
          )}

          {title && (
            <Heading type="h1">{title}</Heading>
          )}
        </STitleWrapper>
      </SHeader>

      <SContent>
        {children}
      </SContent>
    </SList>
  );
};

export default List;
