import React, { Fragment, useEffect, useState, useRef } from 'react'
import { Link } from '@reach/router'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { useNearScreen } from '@/hooks/useNearScreen'
import { FavoriteButton } from '@/components/favoriteButton'
import { ToggleLikeMutation } from '@/containers/toggleLikeMutation'
import './index.styl'

const DEFAULT_IMAGE ='https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `like-${id}`
  const [show, ref] = useNearScreen()
  const [liked, setLiked] = useLocalStorage(key, false)

  return (
    <article ref={ref} className="PhotoCard">
    {
      show && <Fragment>
        <Link className="PhotoCard-link" to={`/detail/${id}`}>
          <div className="PhotoCard-wrap">
            <img className="PhotoCard-img" src={src} alt=""/>
          </div>
        </Link>

        <ToggleLikeMutation>
        {
          (toggleLike) => {
            const onFavoriteClick = () => {
              !liked && toggleLike({ variables: {
                input: { id }
              }})
              setLiked(!liked)
            }
            return (
              <FavoriteButton likes={likes} liked={liked} onClick={onFavoriteClick}/>
            )
          }
        }
        </ToggleLikeMutation>
      </Fragment>
    }
    </article>
  )
}