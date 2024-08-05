import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import Text from '../Text/Text';
import theme from '../../../theme/theme';

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
  variant?: 'primary';
  type?: 'button' | 'submit';
}

const variantStyles = {
  primary: css`
    background-color: ${theme.colors.skyBlue};
    color: ${theme.colors.white};;
    border: none;
  `,
};

const SBaseButton = styled.button<{ variant?: 'primary' }>`
  cursor: pointer;
  ${({ variant }) => variant && variantStyles[variant]}
`;

const Button: React.FC<ButtonProps> = ({
  onClick: handleClick, className, children, variant, type = 'button'
}) => {
  return (
    <SBaseButton
      onClick={handleClick}
      className={className}
      variant={variant}
      type={type}
    >
      <Text>{children}</Text>
    </SBaseButton>
  );
};

export default Button;
