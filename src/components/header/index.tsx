import Link from 'next/link';

import * as S from './styles';

export default function Header() {
  return (
    <S.Header>
      <S.Nav>
        <S.Brand>
          <span>Planning Card Pocker</span>
          <strong>
            P<sup>2</sup>
          </strong>
        </S.Brand>
        <S.Menu>
          <S.Item>
            <Link href="/">
              <S.HeaderLinks>Home</S.HeaderLinks>
            </Link>
          </S.Item>
          <S.Item>
            <Link href="/play">
              <S.HeaderLinks>Play</S.HeaderLinks>
            </Link>
          </S.Item>
          <S.Item>
            <Link href="/login">
              <S.HeaderLinks>Login</S.HeaderLinks>
            </Link>
          </S.Item>
        </S.Menu>
      </S.Nav>
    </S.Header>
  );
}
