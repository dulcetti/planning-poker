import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../styles/global';
import { theme } from '../styles/theme';
import { ILayout } from './interfaces';

export default function Layout({ children }: ILayout) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main>{children}</main>
    </ThemeProvider>
  );
}
