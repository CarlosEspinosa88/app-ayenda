import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Layout from './src/components/layout';
import Root from './src/navigators/app-navigator'
import { NETWORK_INTERFACE } from './src/config/index'

const apolloClient =  new ApolloClient ({
  link: new HttpLink({ uri: NETWORK_INTERFACE }),
  cache: new InMemoryCache()
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <Layout>
          <Root />
        </Layout>
      </ApolloProvider>
    )
  }
}

export default App;