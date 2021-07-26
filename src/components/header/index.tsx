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
            <S.Link href="/">Home</S.Link>
          </S.Item>
          <S.Item>
            <S.Link href="/play">Play</S.Link>
          </S.Item>
          <S.Item>
            <S.Link href="/login">Login</S.Link>
          </S.Item>
        </S.Menu>
      </S.Nav>
    </S.Header>
  );
}
