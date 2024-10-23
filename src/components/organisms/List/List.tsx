import { ReactNode } from 'react';
import styled from 'styled-components';
import theme from '../../../theme/theme';
import Heading from '../../atoms/Heading/Heading';
import Icon from '../../atoms/Icon/Icon';
import { Category } from '../../../types';
import CategoryIcon from '../../atoms/CategoryIcon/CategoryIcon';

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
  width: 50%;

  ${theme.breakpoints.mobileOnly} {
    width: 100%;
  }

  ${theme.breakpoints.tabletUp} {
    width: 60%;
  }
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

  ${theme.breakpoints.tabletUp} {
      left: ${theme.space(2)};
  }
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
  onBack: handleGoBack,
  className
}) => {
  const title = category?.name;
  const categoryIcon = category?.icon;

  return (
    <SList className={className}>
      <SHeader>
        {goBack && (
          <SGoBackIcon name="fas fa-arrow-left" onClick={handleGoBack} />
        )}

        <STitleWrapper>
          {categoryIcon && (
            <CategoryIcon
              name={categoryIcon}
              iconColor={category.iconColor}
              backgroundColor={category.backgroundColor}
              size={12}
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
