import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchPage } from '../../../src/heroes/pages/SearchPage';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));

describe('pruebas en el componente SearchPage', () => {
  beforeEach(() => jest.clearAllMocks());

  test('debe de mostrar el componente correctamente', () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>,
    );

    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar el héroe Batman y el input con el valor del quieryString', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <SearchPage />
      </MemoryRouter>,
    );

    const input = screen.getByRole('textbox');

    expect(input.value).toBe('batman');

    const heroImage = screen.getByRole('img');

    expect(heroImage.src).toContain('/assets/heroes/dc-batman.jpg');

    const alert = screen.getByLabelText('alert-search-hero');

    expect(alert.style.display).toBe('none');
  });

  test('debe de mostrar el mensaje de error si no hay heroes', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=no-hero']}>
        <SearchPage />
      </MemoryRouter>,
    );

    const alert = screen.getByLabelText('alert-no-hero-found');

    expect(screen.getByText('No hero with')).toBeTruthy();
    expect(alert.style.display).toBe('');
  });

  test('debe de llamar el navigate cuando se busca un héroe', () => {
    render(
      <MemoryRouter initialEntries={['/search']}>
        <SearchPage />
      </MemoryRouter>,
    );

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    fireEvent.change(input, { target: { value: 'batman' } });
    fireEvent.click(button);

    expect(mockedUseNavigate).toHaveBeenCalledWith('?q=batman');
  });
});
