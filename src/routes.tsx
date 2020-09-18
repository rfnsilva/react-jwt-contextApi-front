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
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Cadastro />
          </Route>
        </AuthProvider>
      </Switch>
    </BrowserRouter>
  );
}