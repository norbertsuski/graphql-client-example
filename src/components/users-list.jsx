import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import styled from 'styled-components';

const USERS_QUERY = gql`{
  users {
    id
    firstname
    lastname
  }
}`;

const User = styled.p`
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  margin: 15px 0;

  :hover {
    cursor: pointer;
    color: blue;
  }
`;

export const UsersList = ()=> {
  const { loading, error, data } = useQuery(USERS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return <div>
      {data.users.map(({ id, firstname, lastname })=> <User key={id}>
        {firstname} {lastname}
      </User>)}
    </div>;
}
