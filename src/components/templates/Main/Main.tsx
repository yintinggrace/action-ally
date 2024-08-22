import { ReactNode } from 'react';
import styled from 'styled-components';
import theme from '../../../theme/theme';
import Heading from '../../atoms/Heading/Heading';
import Icon from '../../atoms/Icon/Icon';

interface MainProps {
  children?: ReactNode;
  className?: string;
  title?: string;
  closePage?: boolean;
  onClose?: () => void;
}

const SMain = styled.main`
  padding: ${theme.space(14)} ${theme.space(8)};
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SIcon = styled(Icon)`
  position: absolute;
  right: ${theme.space(8)};
  top: ${theme.space(8)};
  font-size: ${theme.fontSizes.cat};
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    color: ${theme.colors.mediumBlack};
  }
`;

const Main: React.FC<MainProps> = ({ children, title, closePage, onClose: handleClose }) => {
  return (
    <SMain>
      {title && (
        <Heading type="h1">{title}</Heading>
      )}

      {closePage && (
        <SIcon name="fa-solid fa-xmark" onClick={handleClose} />
      )}

      {children && (
        children
      )}
    </SMain>
  );
};

export default Main;
