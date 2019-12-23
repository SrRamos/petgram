import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { App } from './App'
import Context from '@/Context'
import './index.styl'

const client = new ApolloClient({
  uri: 'https://petgram-server.midudev.now.sh/graphql'
})

const target = document.getElementById('app')
ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  target)
