import React, { createContext, useState } from 'react';
import API from '../config/api';

interface AuthContextData {
  signed: boolean;
  user: object | null;
  signIn(user: object): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);
  
  async function signIn(user: any){
    const response = await API.post('/cadastrar', { user });

    setUser(response.data);

    localStorage.setItem('user', JSON.stringify(response.data));
    
    return user;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signed: !!user,
        signIn
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;