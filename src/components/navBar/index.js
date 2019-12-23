import React from 'react'
import { Link } from '@reach/router'
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'
import './index.styl'

const SIZE = 32

export const NavBar = () => {
  return (
    <nav className="NavBar">
      <Link className="NavBar-link" to="/"><MdHome size={SIZE}/></Link>
      <Link className="NavBar-link" to="/favorites"><MdFavoriteBorder size={SIZE}/></Link>
      <Link className="NavBar-link" to="/account"><MdPersonOutline size={SIZE}/></Link>
    </nav>
  )
}
