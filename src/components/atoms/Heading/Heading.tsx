import { ReactNode } from 'react';
import theme from '../../../theme/theme';
import styled from 'styled-components';

interface HeadingProps {
  children: ReactNode;
  className?: string;
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const SH2 = styled.h2`
  font-size: ${theme.fontSizes.mouse};
`;

const Heading: React.FC<HeadingProps> = ({ className, children, type }) => {
  switch (type) {
    case 'h1':
      return (
        <h1 className={className}>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <SH2 className={className}>
          {children}
        </SH2>
      );
    case 'h3':
      return (
        <h3 className={className}>
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4 className={className}>
          {children}
        </h4>
      );
    default:
      return (
        <h1 className={className}>
          {children}
        </h1>
      );
  }
};

export default Heading;
