import React from 'react'

import './style.scss'
import type { NavbarProps } from '../../types'

export const Navbar = (props: NavbarProps) => (
  <div className='nav-bar'>
    <span className='nav' onClick={ () => props.toggleMenu() }>
      <img src='img/hamburger.png' />
    </span>

    <h1 className='heading'>{ `${ props.monthName } ${ props.year }` }</h1>

    <div className={ `${props.menuVisible ? 'shown' : ''} menu` }>
      <p className='heading' onClick={ () => props.clear() }>clear</p>
    </div>
  </div>
)

