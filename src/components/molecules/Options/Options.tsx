import React, { useState } from 'react';
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
  background-color: ${({ type, option }) => {
    return type === 'color' ? option : 'transparent';
  }};
  border: ${({ type, selected }) => {
    if (type === 'color' && selected) {
      return `2px solid ${theme.colors.black}`;
    }
    return 'none';
  }};
`;

const SIcon = styled.i<{ type?: type; selected?: boolean }>`
  color: ${({ type, selected }) => {
    if (type === 'icon' && selected) {
      return theme.colors.black;
    }
    return theme.colors.white;
  }};
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
            <SIcon className={option} />
          )}
        </SLi>
      ))}
    </SUl>
  );
};

export default Options;
