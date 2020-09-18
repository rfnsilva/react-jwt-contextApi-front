import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import { AuthProvider } from '../contexts/auth'

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AuthProvider>
          <Route exact path="/home">
            <Home />
          </Route>
        </AuthProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default AppRoutes;