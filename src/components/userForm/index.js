import React, { Fragment } from 'react'
import { useInputValue } from '@/hooks/useInputValue'
import './index.styl'

export const UserForm = ({ onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  return (
    <Fragment>
      <h2 className="FormTitle">{title}</h2>
      <form className="UserForm" onSubmit={onSubmit}>
        <input
          type="text"
          className="UserForm-input"
          placeholder="Email"
          autoComplete="email"
          {...email}
        />
        <input
          className="UserForm-input"
          type="password"
          placeholder="Password"
          autoComplete="password"
          {...password}
        />
        <button className="UserForm-button">
          {title}
        </button>
      </form>
    </Fragment>
  )
}
