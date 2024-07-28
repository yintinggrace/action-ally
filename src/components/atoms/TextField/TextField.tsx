import theme from '../../../theme/theme';
import styled from 'styled-components';

const SInput = styled.input`
  background-color: transparent;
  font-style: italic;
  font-size: ${theme.fontSizes.mouse};
`;

interface TextFieldProps {
  className?: string;
  placeholder: string;
  name: string;
  value: string;
  setValue: (value: string) => void;
}

const TextField: React.FC<TextFieldProps> = ({
  className, value, setValue, placeholder, name
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  return (
    <SInput
      type="text"
      className={className}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleInputChange}
    />
  )
}

export default TextField;
