import { createContext } from 'react';
import { useAuthProvider } from './useAuthProvider.hook';

export const AuthContext = createContext({
  user: null,
  logged: false,
  login: (user) => {},
  logout: () => {},
});

export function AuthProvider({ children }) {
  const state = useAuthProvider();
  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
}
