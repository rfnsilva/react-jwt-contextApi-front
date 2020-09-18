import React, { useContext } from 'react';

import AuthContext from '../contexts/auth'

import AppRoutes from './appRoutes';
import AuthRoutes from './authRoutes';

const Routes: React.FC = () => {
  const { signed } = useContext(AuthContext);
  console.log(signed)
  
  return signed ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;