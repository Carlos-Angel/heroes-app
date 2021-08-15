import React from 'react';
import { mount } from 'enzyme';

import { AuthContext } from '../../../auth/AuthContext';
import LoginScreen from '../../../login/LoginScreen';
import { types } from '../../../types';

describe('Pruebas en <LoginScreen />', () => {
  const historyMock = {
    push: jest.fn(),
    location: {},
    listen: jest.fn(),
    createHref: jest.fn(),
    replace: jest.fn(),
  };

  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: false,
    },
  };

  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <LoginScreen history={historyMock} />
    </AuthContext.Provider>,
  );

  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de realizar el dispatch y la navegación', () => {
    const button = wrapper.find('button').prop('onClick');
    button();

    expect(contextValue.dispatch).toHaveBeenCalledWith({
      type: types.login,
      payload: { name: 'Carlos' },
    });
    expect(historyMock.replace).toHaveBeenCalledWith('/');

    localStorage.setItem('lastPath', '/dc');
    button();
    expect(historyMock.replace).toHaveBeenCalledWith('/dc');
  });
});
