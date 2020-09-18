import React, { useContext } from 'react';

import AuthContext from "../contexts/auth";

const Home: React.FC = () => {
  const { user } = useContext(AuthContext)

  console.log(user)

  return (
    <h1>Bem vindo {user}</h1>
  );
}

export default Home;