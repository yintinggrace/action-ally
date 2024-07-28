interface IconProps {
  className?: string;
  name: string;
  onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({ className, name, onClick: handleClick }) => {
  const classNames = `
    ${name}
    ${className ? className : ''}
  `;

  return (
    <i
      className={classNames}
      onClick={handleClick}
    />
  );
};

export default Icon;
