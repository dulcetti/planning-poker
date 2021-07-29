import Link from 'next/link';
import { useRouter } from 'next/router';

import * as S from './styles';

export default function Header() {
  const actualRouter = useRouter();
  const links = [
    {
      href: '/',
      text: 'Home',
    },
    {
      href: '/play',
      text: 'Play',
    },
    {
      href: '/login',
      text: 'Login',
    },
  ];

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
          {links.map((link, index) => {
            const className = actualRouter.pathname === link.href ? '-active' : '';

            return (
              <S.Item key={index}>
                <Link href={link.href}>
                  <S.HeaderLinks className={className}>{link.text}</S.HeaderLinks>
                </Link>
              </S.Item>
            );
          })}
        </S.Menu>
      </S.Nav>
    </S.Header>
  );
}
