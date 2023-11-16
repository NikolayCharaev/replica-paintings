import React from 'react'
import {NavWrapper, NavList, NavItem} from '../_styles/nav'
const Nav = () => {
  return (
    <NavWrapper>
        <NavList>
            <NavItem>Репродукции</NavItem>
            <NavItem>Новинки</NavItem>
            <NavItem>О нас</NavItem>
        </NavList>
    </NavWrapper>
  )
}

export default Nav