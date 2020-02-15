import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import App from './App'
import * as serviceWorker from './serviceWorker'

const client = new ApolloClient({
    uri: 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql'
})

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
)

serviceWorker.unregister()
