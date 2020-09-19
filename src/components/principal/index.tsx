import React from 'react';
import { Redirect } from 'react-router-dom';

import { Container } from './styles';

const Principal: React.FC = () => {
  const storage: any = localStorage.getItem('user');
  const userData = JSON.parse(storage)

  if(userData === null) {
    return <Redirect to="/" />
  }

  return (
    <Container>
        <h2>nome:  <p>{userData.nome}</p> </h2>
        <h2>email: <p> {userData.email}</p> </h2>
        <h2>token: <p> {userData.token}</p></h2>
    </Container>
  );
}

export default Principal;