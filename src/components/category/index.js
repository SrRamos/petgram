import React from 'react'
import { Link } from '@reach/router'
import './index.styl'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = DEFAULT_IMAGE, path = '#', emoji = '?'}) => (
  <Link className="Category" to={path}>
    <img className='Category-img' src={cover} alt="cover"/>
    {emoji}
  </Link>
)
