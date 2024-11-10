import styled from "styled-components";
import theme from "../../../theme/theme";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { faTree } from '@fortawesome/free-solid-svg-icons';
import { faWallet } from '@fortawesome/free-solid-svg-icons';

interface CategoryIconProps {
  name: string;
  className?: string;
  iconColor?: string;
  hoverColor?: string;
  backgroundColor?: string;
  size?: number;
  showCircle?: boolean
}

const SContainer = styled.span<{
  $backgroundColor?: string,
  size?: number,
  $showCircle?: boolean
}>`
  ${({ size }) => size && `height: ${theme.space(size)};`}
  ${({ $showCircle, $backgroundColor }) => $showCircle && `
    background-color: ${$backgroundColor || theme.colors.lightGray};
    aspect-ratio: 1;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

const SFontAwesomeIcon = styled(FontAwesomeIcon)<{
  $iconColor?: string,
  hoverColor?: string,
  $showCircle?: boolean,
}>`
  ${({ $showCircle }) => $showCircle && `height: 50%;`}

  path {
    fill: ${({ $iconColor }) => $iconColor || theme.colors.white};
  }

  &:hover path {
    ${({ hoverColor }) => hoverColor && `fill: ${hoverColor};`}
  }
`;

const CategoryIcon: React.FC<CategoryIconProps> = ({
  name, className, iconColor, hoverColor, backgroundColor, size, showCircle
}) => {
  const getIcon = (name: string) => {
    switch (name) {
      // Icon options
      case "faCartShopping":
        return faCartShopping;
      case "faBriefcase":
        return faBriefcase;
      case "faDumbbell":
        return faDumbbell;
      case "faFilm":
        return faFilm;
      case "faGraduationCap":
        return faGraduationCap;
      case "faHeartPulse":
        return faHeartPulse;
      case "faHouse":
        return faHouse;
      case "faPlane":
        return faPlane;
      case "faTree":
        return faTree;
      case "faWallet":
        return faWallet;
      // App icons
      case "faTasks":
        return faTasks;
      case "faLayerGroup":
      default:
        return faLayerGroup;
    }
  }

  return (
    <SContainer
      className={className}
      $backgroundColor={backgroundColor}
      size={size}
      $showCircle={showCircle}
    >
      <SFontAwesomeIcon
        icon={getIcon(name)}
        $iconColor={iconColor}
        hoverColor={hoverColor}
        $showCircle={showCircle}
      />
    </SContainer>
  );
}

export default CategoryIcon;
