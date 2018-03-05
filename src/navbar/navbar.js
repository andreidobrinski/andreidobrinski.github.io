import React from 'react';
import { NavBarContainer, NavBarWrap } from './styled';
import './navbar.css';

const NavBar = () => (
  <NavBarContainer>
    <NavBarWrap>
      <p className="nav-text">Work</p>
      <p className="nav-text-subtle">Play</p>
      <p className="nav-text-subtle">Self</p>
    </NavBarWrap>
  </NavBarContainer>
);

export default NavBar;
