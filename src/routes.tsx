import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Cadastro from './pages/cadastro';
import { AuthProvider } from './contexts/auth'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <AuthProvider>
          <Route exact path="/">
            <Cadastro />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
        </AuthProvider>
      </Switch>
    </BrowserRouter>
  );
}