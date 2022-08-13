import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../../src/auth';
import { AppRouter } from '../../../src/router/AppRouter';

describe('pruebas en el componente AppRouter', () => {
  test('debe de mostrar el login si no está autenticado', () => {
    const contextValue = {
      logged: false,
    };

    render(
      <MemoryRouter>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>,
    );

    expect(screen.getAllByText('Login').length).toBe(2);
  });

  test('debe de mostrar el componente de Marvel si está autenticado', () => {
    const contextValue = {
      logged: true,
      user: { id: 1, name: 'pepe' },
    };

    render(
      <MemoryRouter>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>,
    );

    expect(screen.getByText('Marvel Comics')).toBeTruthy();
  });
});
