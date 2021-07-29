import styled from 'styled-components';

export const Header = styled.header`
  background-color: #2c3e50;
`;

export const Nav = styled.nav`
  display: flex;
  height: 62px;
  margin: 0 auto;
  max-width: 1280px;
`;

export const Brand = styled.h1`
  align-items: center;
  background: url('/img/logos/logo-p.png') no-repeat;
  color: #fff;
  display: flex;
  height: 52px;
  justify-content: flex-end;
  margin-right: 20px;
  width: 88px;

  > span {
    display: none;
  }
`;

export const Menu = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
`;

export const Item = styled.li`
  display: inline-block;
  margin: 0 10px;
`;

export const HeaderLinks = styled.a`
  align-items: center;
  color: #42b983;
  cursor: pointer;
  display: flex;
  font-weight: bold;
  height: 100%;
  padding: 15px 25px;

  &.-active {
    background-color: #fff;
    color: #2c3e50;
    text-decoration: none;
  }
`;
