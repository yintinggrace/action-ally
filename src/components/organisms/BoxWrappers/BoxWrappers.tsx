import BoxWrapper from '../../organisms/BoxWrapper/BoxWrapper';
import string from '../../../string';
import styled from 'styled-components';
import theme from '../../../theme/theme';

const SContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
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
        title={string.saveCategory.backgroundColor.name}
        options={string.saveCategory.backgroundColor.colorOptions}
        type="color"
        onOptionClick={(backgroundColor: string) => setBackgroundColor(backgroundColor)}
      />
      <BoxWrapper
        title={string.saveCategory.iconColor.name}
        options={string.saveCategory.iconColor.colorOptions}
        type="color"
        onOptionClick={(iconColor: string) => setIconColor(iconColor)}
      />
      <BoxWrapper
        title={string.saveCategory.icon.name}
        options={string.saveCategory.icon.iconOptions}
        type="icon"
        onOptionClick={(name: string) => setIcon(name)}
      />
    </SContainer>
  )
}

export default BoxWrappers
