import Heading from '../../atoms/Heading/Heading';
import Options from '../../molecules/Options/Options';
import styled from 'styled-components';
import theme from '../../../theme/theme';

const SContainer = styled.div`
  background-color: ${theme.colors.whiteTransparent};
  border-radius: ${theme.space(5)};
  margin: ${theme.space(2)} 0;
  padding: ${theme.space(5)};
`;

const SHeading = styled(Heading)`
  margin-bottom: ${theme.space(2)};
  text-align: center;
  font-weight: normal;
  font-size: ${theme.fontSizes.mouse};
`;

interface BoxWrapperProps {
  title: string;
  options: string[];
  type: 'color' | 'icon';
  onOptionClick?: (value: string) => void;
}

const BoxWrapper: React.FC<BoxWrapperProps> = ({
  title, options, type, onOptionClick: handleOptionClick
}) => {
  return (
    <SContainer>
      <SHeading type="h4">
        {title}
      </SHeading>

      <Options
        options={options}
        type={type}
        onOptionClick={handleOptionClick}
      />
    </SContainer>
  );
}

export default BoxWrapper;
