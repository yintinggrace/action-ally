import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import Text from '../Text/Text';
import theme from '../../../theme/theme';

interface ButtonProps {
  className?: string;
  children?: ReactNode;
  type?: 'button' | 'submit';
}

const SBaseButton = styled.button`
  cursor: pointer;
`;

const Button: React.FC<ButtonProps> = ({
  className, children, type = 'button'
}) => {
  return (
    <SBaseButton
      className={className}
      type={type}
    >
      <Text>{children}</Text>
    </SBaseButton>
  );
};

export default Button;
