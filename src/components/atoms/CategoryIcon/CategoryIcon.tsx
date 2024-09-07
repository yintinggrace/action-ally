import styled from "styled-components";
import theme from "../../../theme/theme";
import Icon from "../Icon/Icon";

interface CategoryIconProps {
  name: string;
  className?: string;
  iconColor?: string;
  backgroundColor?: string;
  size: number;
}

const SIcon = styled(Icon)<{
  iconColor?: string,
  backgroundColor?: string,
  size: number
}>`
  color: ${({ iconColor }) => iconColor};
  background-color: ${({ backgroundColor }) => backgroundColor || theme.colors.lightGray};
  font-size: ${({ size }) => theme.space(size * 0.5)};
  width: ${({ size }) => theme.space(size)};
  height: ${({ size }) => theme.space(size)};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CategoryIcon: React.FC<CategoryIconProps> = ({
  name, className, iconColor, backgroundColor, size
}) => {
  return (
    <SIcon
      name={name}
      className={className}
      iconColor={iconColor}
      backgroundColor={backgroundColor}
      size={size}
    />
  )
}

export default CategoryIcon;
