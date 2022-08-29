import React, { Component } from 'react';
import styled from 'styled-components';

import TIV from '../../assets/images/tIV_logo.png';

export default class Navbar extends Component {
  render() {
    return (
      <>
        <Logo src={TIV} />
        <MenuContainer>

          <NavMenu>
            <NavItem>Home</NavItem>
            <NavItem>Shop</NavItem>
            <NavItem>Library</NavItem>
            <NavItem>Profile</NavItem>
          </NavMenu>
        </MenuContainer>
      </>
    )
  }
}

const MenuContainer = styled.div`
padding: 0;
margin: 0;
display: flexbox;
background-color: transparent;

`

const Logo = styled.img`
height: 40vh;
background-color: transparent;
-webkit-filter: drop-shadow(5px 5px 5px #222);
  filter: drop-shadow(5px 5px 5px #222);
    
`
const NavMenu = styled.ul`
width: 100%;
padding: 0;
display: flexbox;
flex-direction: row;
justify-content: center;
align-self: center;
list-style: none;
background-color: forestgreen;

`
const NavItem = styled.li`
color: white;
padding: 1rem;
width: 20vw;
  font-size: 1.5rem;
  text-decoration: none;
  justify-content: space-around;
  &:hover {
   -webkit-filter: drop-shadow(5px 5px 5px #222);
  filter: drop-shadow(5px 5px 5px #222);
  }
`