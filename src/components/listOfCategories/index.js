import React, { Fragment, useEffect, useState } from 'react'
import { Category } from '@/components/category'
import './index.styl'

function useCategoriesData() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(function () {
    setLoading(true)
    window.fetch('https://petgram-server.midudev.now.sh/categories')
      .then(res => res.json())
      .then(res => {
        setCategories(res)
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(function () {
    const onScroll = event => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (isFixed) => {
    const fixedListStyle = isFixed ? 'ListOfCategories--fixed' : ''

    return (<ul className={`ListOfCategories ${fixedListStyle}`}>
      {
        loading ? 
        <li><Category key="loading"/></li> :
        categories.map(category => (
          <li
            className="ListOfCategories-item"
            key={category.id}>
            <Category {...category} path={`/pet/${category.id}`}/>
          </li>
        ))
      }
    </ul>)
  }

  return (
    <Fragment>
    {renderList()}
    {showFixed && renderList(true)}
    </Fragment>
  )
}
