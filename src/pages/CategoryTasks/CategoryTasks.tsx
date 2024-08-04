import { useLocation, useNavigate } from 'react-router-dom';
import Heading from '../../components/atoms/Heading/Heading';
import Icon from '../../components/atoms/Icon/Icon';
import styled from 'styled-components';
import theme from '../../theme/theme';
import Text from '../../components/atoms/Text/Text';

interface LocationState {
  category: {
    name: string;
    icon: string;
    backgroundColor: string;
    iconColor: string;
  };
}

const STitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.space(3)};
`;

const STaskHeading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  padding: ${theme.space(8)} 0;
  gap: ${theme.space(5)};
`;

const SCategoryIcon = styled(Icon)<{ iconColor: string, backgroundColor: string }>`
  color: ${({ iconColor }) => iconColor};
  background-color: ${({ backgroundColor }) => backgroundColor};
  font-size: ${theme.fontSizes.cat};
  padding: ${theme.space(3)};
  border-radius: 50%;
`;

const SBackIcon = styled(Icon)`
  font-size: ${theme.fontSizes.cat};
  position: absolute;
  left: ${theme.space(8)};
`;

const STaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.space(3)};
  background-color: ${theme.colors.white};
  height: 90vh;
  width: 100vw;
  padding: ${theme.space(8)};
  box-sizing: border-box;
  position: relative;
`;

const CategoryTasks = () => {
  const location = useLocation();
  const state = location.state as LocationState;
  const category = state?.category;
  const navigate = useNavigate();

  const handleGoHomeClick = () => {
    navigate('/');
  }

  return (
    <>
      <STaskHeading>
        <SBackIcon
          name="fas fa-arrow-left"
          onClick={handleGoHomeClick}
        />
        <STitleWrapper>
          <SCategoryIcon
            name={category.icon}
            className={category.icon}
            iconColor={category.iconColor}
            backgroundColor={category.backgroundColor}
          />
          <Heading type="h1">
            {category.name}
          </Heading>
        </STitleWrapper>
      </STaskHeading>

      <STaskList />
    </>
  );
}

export default CategoryTasks;
