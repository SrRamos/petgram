import React, { Fragment } from 'react'
import Context from '@/Context'
import { UserForm } from '@/components/userForm'

export const GuessUser = () =>  (
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return (
          <Fragment>
            <UserForm title="Sign In" onSubmit={activateAuth}/>
            <UserForm title="Sign Up" onSubmit={activateAuth}/>
          </Fragment>
        )
      }
    }
  </Context.Consumer>
)
