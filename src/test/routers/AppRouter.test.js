import React from 'react';
import { mount } from 'enzyme';

import AppRouter from 'routers/AppRouter';
import { AuthContext } from 'context/auth';

describe('Pruebas en <AppRouter />', () => {
  test('snapshot login screen', () => {
    const authContextValue = {
      logged: false,
      user: null,
      login: jest.fn(),
      logout: jest.fn(),
    };

    const wrapper = mount(
      <AuthContext.Provider value={authContextValue}>
        <AppRouter />
      </AuthContext.Provider>,
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h1').text().trim()).toBe('Login');
  });

  test('debe de mostrar el componente de marvel si esta autenticado', () => {
    const authContextValue = {
      logged: true,
      user: { name: 'Test' },
      login: jest.fn(),
      logout: jest.fn(),
    };

    const wrapper = mount(
      <AuthContext.Provider value={authContextValue}>
        <AppRouter />
      </AuthContext.Provider>,
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.navbar').exists()).toBe(true);
  });
});
