import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../../../src/auth/context/AuthContext';
import { Navbar } from '../../../../src/ui/components/Navbar';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));

describe('pruebas en el componente Navbar', () => {
  const contextValue = {
    user: {
      name: 'Juan',
      id: '123',
    },
    logout: jest.fn(),
  };

  beforeEach(() => jest.clearAllMocks());

  test('debe de mostrar el nombre del usuario', () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>,
    );

    expect(screen.getByText('Juan')).toBeTruthy();
  });

  test('debe de llamar el logout y el navigate cuando se hace click en el botón Logout', () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>,
    );

    const logoutButton = screen.getByRole('button', { name: /logout/i });

    fireEvent.click(logoutButton);

    expect(contextValue.logout).toHaveBeenCalledTimes(1);
    expect(mockedUseNavigate).toHaveBeenCalledWith('/login', { replace: true });
  });
});
