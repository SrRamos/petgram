import React from 'react'
import Context from '@/Context'
import { Router } from '@reach/router'
import { NavBar } from '@/components/navBar'
import { Home } from '@/pages/Home'
import { Detail } from '@/pages/Detail'
import { Favorites } from '@/pages/Favorites'
import { Account } from '@/pages/Account'
import { GuessUser } from '@/pages/GuessUser'

const UserLogged = ({ children }) => children({ isAuth: true })

export const App = () => {
  return (
    <div>
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId'/>
      </Router>
      <Context.Consumer>
        {
          ({ isAuth }) => (
            isAuth ?
            <Router>
              <Favorites path='/favorites' />
              <Account path='/account' />
            </Router> :
            <Router>
              <GuessUser path='/favorites' />
              <GuessUser path='/account' />
            </Router>
          )
        }
      </Context.Consumer>
      <NavBar />
    </div>
  )
}