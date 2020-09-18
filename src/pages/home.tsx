import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

const Home: React.FC = () => {
  const storage: any = localStorage.getItem('user');
  const userData = JSON.parse(storage);

  if(userData === null) {
    return <Redirect to="/" />
  }

  return (
    <h1>Bem vindo {userData.nome} </h1>
  );
}

export default Home;