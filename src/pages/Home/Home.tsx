import React from 'react';
import styled from 'styled-components';
import string from '../../string';
import theme from '../../theme/theme';
import Main from '../../components/templates/Main/Main';
import Image from '../../components/atoms/Image/Image';
import logo from '../../images/action-ally.svg';
import Text from '../../components/atoms/Text/Text';
import CategoryList from '../../components/organisms/CategoryList/CategoryList';

const SSloganText = styled(Text)`
  font-size: ${theme.fontSizes.ant};
  font-style: italic;
  text-align: center;
  margin: ${theme.space(4)} 0 ${theme.space(10)};
`;

const Home: React.FC = () => {
  return (
    <Main>
      <Image
        src={logo}
        alt={string.home.title}
        title={string.home.title}
      />

      <SSloganText>
        {string.home.slogan}
      </SSloganText>

      <CategoryList />
    </Main>
  );
};

export default Home;
