import React from 'react'
import { PhotoCard } from '@/components/photoCard'

export const ListOfPhotoCardsComponent = ({ data: { photos = []} = {}}) => {
  return (
    <ul>
      {
        photos.map(photo => (
          <PhotoCard key={photo.id} {...photo} />
        ))
      }
    </ul>
  )
}
