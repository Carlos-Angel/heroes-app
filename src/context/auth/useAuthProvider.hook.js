import { useReducer, useEffect } from 'react';
import { authReducer, INITIAL_STATE, actions } from './auth.reducer';
const HERO_APP = 'hero-app-token';

function initialState() {
  return JSON.parse(localStorage.getItem(HERO_APP)) || { user: null, logged: false };
}

export function useAuthProvider() {
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE, initialState);
  const { logged } = state;

  const login = (user) => dispatch(actions.login(user));
  const logout = () => dispatch(actions.logout());

  useEffect(() => {
    localStorage.setItem(HERO_APP, JSON.stringify(state));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logged]);

  return { ...state, login, logout };
}
