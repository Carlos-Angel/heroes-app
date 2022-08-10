import { authReducer } from '../../../../src/auth/context';
import { types } from '../../../../src/auth/types/types';

describe('pruebas en la función authReducer', () => {
  test('debe de retornar el estado por defecto', () => {
    const initialState = { logged: false };
    const action = { type: 'type' };

    const state = authReducer(initialState, action);

    expect(state).toEqual(initialState);
  });

  test('debe de retornar el estado cuando se ejecuta el action login', () => {
    const initialState = { logged: false, user: null };
    const action = {
      type: types.login,
      payload: { id: 1, name: 'Juan' },
    };

    const state = authReducer(initialState, action);

    expect(state.logged).toBeTruthy();
    expect(state.user).toEqual(action.payload);
  });

  test('debe de retornar el estado cuando se ejecuta el action logout', () => {
    const initialState = { logged: true, user: { id: 1, name: 'Juan' } };
    const action = {
      type: types.logout,
    };

    const state = authReducer(initialState, action);

    expect(state.logged).toBeFalsy();
  });
});
