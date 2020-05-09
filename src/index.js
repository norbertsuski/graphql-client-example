import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import { GlobalStyle } from './styles/global-style';
import { UsersList, UserForm } from './components';
import styled from 'styled-components';

const client = new ApolloClient({
  uri: 'http://localhost:8050'
});

const Content = styled.div`
  margin: 100px auto;
  width: 700px;
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ApolloProvider client={client}>
    <Content>
      <h1>Simple GraphQL client</h1>
      <UserForm />
      <UsersList />
    </Content>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
