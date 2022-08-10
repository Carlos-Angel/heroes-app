import { types } from '../../../../src/auth/types/types';

describe('pruebas en los types', () => {
  test('debe de retornar los siguientes types', () => {
    expect(types).toEqual({
      login: '[Auth] Login',
      logout: '[Auth] Logout',
    });
  });
});
