import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import { AuthContext } from 'context/auth';
import LoginScreen from 'components/login/LoginScreen';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('Pruebas en <LoginScreen />', () => {
  const authContextValue = {
    logged: false,
    user: null,
    login: jest.fn(),
    logout: jest.fn(),
  };

  const wrapper = mount(
    <AuthContext.Provider value={authContextValue}>
      <MemoryRouter initialEntries={['/login']}>
        <LoginScreen />
      </MemoryRouter>
    </AuthContext.Provider>,
  );

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de realizar el login y la navegación a "/"', () => {
    const button = wrapper.find('button').prop('onClick');
    button();

    expect(authContextValue.login).toHaveBeenCalledTimes(1);
    expect(authContextValue.login).toHaveBeenCalledWith({ name: 'Batman' });
    expect(mockNavigate).toHaveBeenCalledWith('/', { replace: true });
  });

  test('debe de realizar el login y la navegación a "/dc" si el lastPath existe', () => {
    localStorage.setItem('lastPath', '/dc');
    const button = wrapper.find('button').prop('onClick');
    button();

    expect(authContextValue.login).toHaveBeenCalledTimes(1);
    expect(authContextValue.login).toHaveBeenCalledWith({ name: 'Batman' });
    expect(mockNavigate).toHaveBeenCalledWith('/dc', { replace: true });
  });
});
