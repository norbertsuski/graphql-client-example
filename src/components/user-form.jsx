import React, { useState, useEffect } from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import styled from 'styled-components';

const StyledForm = styled.form`
  margin: 20px 0;
`;

const StyledLabel = styled.label`
  display: block;
  margin: 5px 0;

  input {
    margin-left: 20px;
  }
`;

const CREATE_USER = gql`
  mutation CreateUser($firstname: String!, $lastname: String!, $nickname: String!, $email: String!, $password: String!) {
    createUser(
      data: {
        firstname: $firstname,
        lastname: $lastname,
        nickname: $nickname,
        email: $email,
        password: $password
      }
    ) {
      id
    }
  }
`;

const UserForm = ()=> {
  const [createUser] = useMutation(CREATE_USER);
  const [user, setUser] = useState({});

  const handleOnChange = (event)=> {
    setUser({ ...user, [event.target.name]: event.target.value});
  }

  const handleSubmit = (event)=> {
    createUser({variables: { ...user }});
    event.preventDefault();
  }

  return <StyledForm onSubmit={handleSubmit}>
    <StyledLabel>
      First name:
      <input onChange={handleOnChange} type="text" name="firstname" />
    </StyledLabel>
    <StyledLabel>
      Second name:
      <input onChange={handleOnChange} type="text" name="lastname" />
    </StyledLabel>
    <StyledLabel>
      Nickname:
      <input onChange={handleOnChange} type="text" name="nickname" />
    </StyledLabel>
    <StyledLabel>
      Email:
      <input onChange={handleOnChange} type="text" name="email" />
    </StyledLabel>
    <StyledLabel>
      Password:
      <input onChange={handleOnChange} type="password" name="password" />
    </StyledLabel>
    <input type="submit" value="Create" />
  </StyledForm>;
}

export default UserForm;
