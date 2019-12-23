import React from 'react'
import { PhotoCard } from '@/components/photoCard'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const GET_PHOTO_BY_ID = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

const renderComponent = ({ loading, error, data: { photo = {} } = {} }) => {
  if (loading) { return <p>Loading...</p> }
  if (error) { return <p><p>Error!</p></p> }

  return <PhotoCard {...photo}/>
}

export const PhotoCardWithQuery = ({ id }) => {
  return (<Query query={GET_PHOTO_BY_ID} variables={{ id }}>
    {renderComponent}
  </Query>)
}
