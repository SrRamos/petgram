import React, { Fragment } from 'react'
import { ListOfCategories } from '@/components/listOfCategories'
import { ListOfPhotoCards } from '@/containers/listOfPhotoCards'

export const Home = ({ id }) => (
  <Fragment>
    <ListOfCategories />
    <ListOfPhotoCards categoryId={id}/>
  </Fragment>
)
