import { ThemeProvider } from 'styled-components';

import Footer from 'components/footer';
import Header from 'components/header';

import { GlobalStyle } from '../styles/global';
import { theme } from '../styles/theme';
import * as S from './styles';
import { ILayout } from './interfaces';

export default function Layout({ children }: ILayout) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <S.Layout>
        <S.Container>{children}</S.Container>
      </S.Layout>
      <Footer />
    </ThemeProvider>
  );
}
