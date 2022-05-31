import { authReducer, INITIAL_STATE, actions } from 'context/auth/auth.reducer';

describe('auth.reducer.js', () => {
  test('debe retornar el estado por defecto', () => {
    expect(authReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  test('debe de autenticar y colocar el "name" del usuario', () => {
    const user = {
      name: 'Test',
    };

    const state = authReducer(undefined, actions.login(user));
    expect(state).toEqual({
      logged: true,
      user: user,
    });
  });

  test('debe de borrar el usuario y cerrar sesión', () => {
    const state = authReducer(undefined, actions.logout());
    expect(state).toEqual(INITIAL_STATE);
  });
});
