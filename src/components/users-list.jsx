import React, { useState } from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import UserDetails from './user-details';

const USERS_QUERY = gql`{
  users {
    id
    firstname
    lastname
  }
}`;

const StyledUl = styled.ul`
  list-style: none;
`;

const StyledLi = styled.li`
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const UsersList = ()=> {
  const { loading, error, data } = useQuery(USERS_QUERY);
  const [userId, setUserId] = useState(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return <div>
    <h2>Users</h2>
    <StyledUl>
      {data.users.map(({ id, firstname, lastname })=> <StyledLi onClick={()=> setUserId(id)} key={id}>
        {firstname} {lastname}
      </StyledLi>)}
    </StyledUl>
    {userId && <UserDetails id={userId}></UserDetails>}
  </div>;
}

export default UsersList;
