import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import { AuthContext } from 'context/auth';
import { Navbar } from 'components/ui/Navbar';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('Pruebas en <Navbar />', () => {
  const authContextValue = {
    logged: true,
    user: { name: 'Test' },
    login: jest.fn(),
    logout: jest.fn(),
  };

  const wrapper = mount(
    <AuthContext.Provider value={authContextValue}>
      <MemoryRouter initialEntries={['/']}>
        <Navbar />
      </MemoryRouter>
    </AuthContext.Provider>,
  );

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-info').text().trim()).toBe(authContextValue.user.name);
  });

  test('debe de llamar el navigate y el logout', () => {
    const button = wrapper.find('button').prop('onClick');
    button();

    expect(authContextValue.logout).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/login');
  });
});
