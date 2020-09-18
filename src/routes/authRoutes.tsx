import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Cadastro from '../pages/cadastro';
import { AuthProvider } from '../contexts/auth'

const AuthRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AuthProvider>
          <Route exact path="/">
            <Cadastro />
          </Route>
        </AuthProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default AuthRoutes;