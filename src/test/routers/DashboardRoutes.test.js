import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import { AuthContext } from 'context/auth';
import DashboardRoutes from 'routers/DashboardRoutes';

describe('Pruebas en <DashboardRoutes />', () => {
  test('debe de mostrarse correctamente', () => {
    const authContextValue = {
      logged: true,
      user: { name: 'Test' },
      login: jest.fn(),
      logout: jest.fn(),
    };

    const wrapper = mount(
      <AuthContext.Provider value={authContextValue}>
        <MemoryRouter initialEntries={['/']}>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>,
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-info').text().trim()).toBe('Test');
  });

  test('debe de mostrarse la página de heroes DC', () => {
    const authContextValue = {
      logged: true,
      user: { name: 'Test' },
      login: jest.fn(),
      logout: jest.fn(),
    };

    const wrapper = mount(
      <AuthContext.Provider value={authContextValue}>
        <MemoryRouter initialEntries={['/dc']}>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>,
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h1').text().trim()).toBe('Heroes DC Comics');
  });

  test('debe de mostrarse la página de heroes MARVEL', () => {
    const authContextValue = {
      logged: true,
      user: { name: 'Test' },
      login: jest.fn(),
      logout: jest.fn(),
    };

    const wrapper = mount(
      <AuthContext.Provider value={authContextValue}>
        <MemoryRouter initialEntries={['/marvel']}>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>,
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h1').text().trim()).toBe('Heroes Marvel Comics');
  });
});
