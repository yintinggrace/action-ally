import BoxWrapper from '../../organisms/BoxWrapper/BoxWrapper';
import string from '../../../string';
import styled from 'styled-components';
import theme from '../../../theme/theme';

const SContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: ${theme.space(2)} 0;
`;

interface BoxWrappersProps {
  setIcon: (name: string) => void;
  setBackgroundColor: (backgroundColor: string) => void;
  setIconColor: (iconColor: string) => void;
}

const BoxWrappers: React.FC<BoxWrappersProps> = ({ setIcon, setBackgroundColor, setIconColor }) => {
  return (
    <SContainer>
      <BoxWrapper
        title={string.addCategory.backgroundColor.name}
        options={string.addCategory.backgroundColor.colorOptions}
        type="color"
        onOptionClick={(backgroundColor: string) => setBackgroundColor(backgroundColor)}
      />
      <BoxWrapper
        title={string.addCategory.iconColor.name}
        options={string.addCategory.iconColor.colorOptions}
        type="color"
        onOptionClick={(iconColor: string) => setIconColor(iconColor)}
      />
      <BoxWrapper
        title={string.addCategory.icon.name}
        options={string.addCategory.icon.iconOptions}
        type="icon"
        onOptionClick={(name: string) => setIcon(name)}
      />
    </SContainer>
  )
}

export default BoxWrappers
