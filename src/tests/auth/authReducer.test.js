import { authReducer } from '../../auth/authReducer';
import { types } from '../../types';

describe('Pruebas en authReducer', () => {
  test('debe retornar el estado por defecto', () => {
    const action = {
      type: 'default',
    };
    const state = authReducer({ logged: false }, action);

    expect(state).toEqual({ logged: false });
  });

  test('debe de autenticar y colocar el name del usuario', () => {
    const action = {
      type: types.login,
      payload: {
        name: 'username',
      },
    };
    const state = authReducer({ logged: false }, action);

    expect(state).toEqual({ logged: true, name: 'username' });
  });

  test('debe de borrar el name del usuario y logged en false', () => {
    const action = {
      type: types.logged,
    };
    const state = authReducer({ logged: false }, action);

    expect(state).toEqual({ logged: false });
  });
});
