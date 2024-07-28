import { ReactNode } from 'react';

interface HeadingProps {
  children: ReactNode;
  className?: string;
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Heading: React.FC<HeadingProps> = ({ className, children, type }) => {
  const Tag = type;

  return (
    <Tag className={className}>
      {children}
    </Tag>
  );
};

export default Heading;
