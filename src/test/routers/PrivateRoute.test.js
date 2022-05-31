import React from 'react';
import { mount } from 'enzyme';
import { PrivateRoute } from 'routers/PrivateRoute';
import { MemoryRouter } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Navigate: () => <span>no esta autenticado</span>,
}));

describe('Pruebas en <PrivateRoute />', () => {
  Storage.prototype.setItem = jest.fn();

  test('debe de mostrar el componente si está autenticado y guardar localStorage', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <PrivateRoute isAuthenticated={true}>
          <span>usuario autenticado</span>
        </PrivateRoute>
      </MemoryRouter>,
    );

    expect(wrapper.find('span').exists()).toBe(true);
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/');
  });

  test('debe de bloquear el componente si no está autenticado', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute isAuthenticated={false}>
          <span>usuario autenticado</span>
        </PrivateRoute>
      </MemoryRouter>,
    );

    expect(wrapper.find('span').text().trim()).toBe('no esta autenticado');
  });
});
