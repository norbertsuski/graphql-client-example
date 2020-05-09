import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 20px;
`;

const GET_USER = gql`
  query GetUser($id: String!) {
    user(id: $id) {
      firstname
      lastname
      nickname
      email
    }
  }
`;

const UserDetails = ({ id }) => {
  const { data } =  useQuery(GET_USER, { variables: { id }});

  if (data && data.user) {
    const { user: { firstname, lastname, nickname, email }} = data;
    return <Wrapper>
      <h2>Details</h2>
      <p>Name: {firstname} {lastname}</p>
      <p>Nickname: {nickname}</p>
      <p>E-mail: {email}</p>
    </Wrapper>;
  }

  return null;
}

export default UserDetails;
