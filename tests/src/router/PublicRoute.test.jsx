import { screen, render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../../src/auth';
import { PublicRoute } from '../../../src/router/PublicRoute';

describe('pruebas en el componente PublicRoute', () => {
  test('debe de mostrar el children si el usuario no esta autenticado', () => {
    const contextValue = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <h1>Ruta publica</h1>
        </PublicRoute>
      </AuthContext.Provider>,
    );

    expect(screen.getByText('Ruta publica')).toBeTruthy();
  });

  test('debe de navegar fuera de la página de login si el usuario esta autenticado', () => {
    const contextValue = {
      logged: true,
      user: { id: 1, name: 'pepe' },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route
              path='/login'
              element={
                <PublicRoute>
                  <h1>Ruta publica</h1>
                </PublicRoute>
              }
            />
            <Route path='/marvel' element={<h1>Marvel</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>,
    );

    expect(screen.getByText('Marvel')).toBeTruthy();
  });
});
