import React from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

export const FavoriteButton = ({ likes, liked, onClick}) => {
  const CardIcon = liked ? MdFavorite : MdFavoriteBorder
  
  return (
    <button className="PhotoCard-button" onClick={onClick}>
      <CardIcon size='32px' />{likes} likes!
    </button>
  )
}