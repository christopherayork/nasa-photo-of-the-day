import React from 'react';
import { HeaderStyled, Logo, HeaderNav, Anchor } from './HeaderStyled';

function Header() {

  return (
      <HeaderStyled>
        <Logo>Nasa Stuff</Logo>
        <HeaderNav>
          <Anchor href='#'>Home</Anchor>
          <Anchor href='#'>About</Anchor>
          <Anchor href='#'>Services</Anchor>
          <Anchor href='#'>Nasa</Anchor>
        </HeaderNav>
      </HeaderStyled>
  );
}

export default Header;