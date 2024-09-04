import { useState } from 'react';
import styled from 'styled-components';
import theme from '../../../theme/theme';

type type = 'color' | 'icon';

const SUl = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const SLi = styled.li<{ option: string; type: type; selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${theme.space(8)};
  width: ${theme.space(8)};
  margin: ${theme.space(2)};
  border-radius: 50%;
  cursor: pointer;
  box-sizing: border-box;
  font-size: ${theme.fontSizes.cat};
  background-color: ${({ type, option }) => (
    type === 'color' ? option : 'transparent'
  )};
  outline: ${({ type, selected }) => (
    type === 'color' && selected ? `2px solid ${theme.colors.mediumBlack}` : 'none'
  )};
  transition: transform 0.3s ease, background-color 0.3s ease;
  &:hover {
    ${({ type }) => type === 'color' && 'transform: scale(1.075);'}
    ${({ type }) => type === 'color' && `outline: 2px solid ${theme.colors.white};`}
  }
`;

const SIcon = styled.i<{ selected?: boolean }>`
  color: ${({ selected }) => selected ? theme.colors.mediumBlack : theme.colors.white};
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
    color: ${theme.colors.mediumBlack};
  }
`;

interface OptionsProps {
  options: string[];
  type: type;
  onOptionClick?: (value: string) => void;
}

const Options: React.FC<OptionsProps> = ({
  options, type, onOptionClick: handleOptionClick
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelectedOption = (option: string) => {
    setSelectedOption(option);

    if (handleOptionClick) {
      handleOptionClick(option);
    }
  };

  return (
    <SUl>
      {options.map((option, index) => (
        <SLi
          key={index}
          option={option}
          type={type}
          selected={selectedOption === option}
          onClick={() => handleSelectedOption(option)}
        >
          {type === 'icon' && (
            <SIcon
              className={option}
              selected={selectedOption === option}
            />
          )}
        </SLi>
      ))}
    </SUl>
  );
};

export default Options;
