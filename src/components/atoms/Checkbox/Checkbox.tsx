import theme from '../../../theme/theme';
import styled from 'styled-components';

interface CheckboxProps {
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}

const SInput = styled.input`
  width: ${theme.space(8)};
  color: ${theme.colors.royalBlue};
`;

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, name }) => {
  return (
    <SInput
      type="checkbox"
      checked={checked}
      onChange={onChange}
      name={name}
    />
  );
}

export default Checkbox;
