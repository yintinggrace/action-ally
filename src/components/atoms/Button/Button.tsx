import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import Text from '../Text/Text';
import theme from '../../../theme/theme';

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
  type?: 'button' | 'submit';
}

const SBaseButton = styled.button`
  cursor: pointer;
  background-color: ${theme.colors.skyBlue};
  color: ${theme.colors.white};
  border: none;
`;

const Button: React.FC<ButtonProps> = ({
  onClick: handleClick, className, children, type = 'button'
}) => {
  return (
    <SBaseButton
      onClick={handleClick}
      className={className}
      type={type}
    >
      <Text>{children}</Text>
    </SBaseButton>
  );
};

export default Button;
