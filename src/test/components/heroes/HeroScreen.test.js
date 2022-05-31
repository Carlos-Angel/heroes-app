import React from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { mount } from 'enzyme';

import HeroScreen from 'components/heroes/HeroScreen';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('Pruebas en <HeroScreen />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('no debe de mostrar HeroScreen si no hay argumentos en la URL', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero']}>
        <Routes>
          <Route path='/hero' element={<HeroScreen />} />
          <Route path='/' element={<p>Hero no found</p>} />
        </Routes>
      </MemoryRouter>,
    );
    expect(wrapper.find('p').text().trim()).toBe('Hero no found');
  });

  test('debe de mostrar un hero si el parámetro existe y se encuentra', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Routes>
          <Route path='/hero/:heroId' element={<HeroScreen />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.row').exists()).toBe(true);
  });

  test('debe de regresar a la pantalla anterior', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Routes>
          <Route path='/hero/:heroId' element={<HeroScreen />} />
        </Routes>
      </MemoryRouter>,
    );

    const button = wrapper.find('button').prop('onClick');
    button();

    expect(mockNavigate).toHaveBeenCalledWith(-1);
    expect(mockNavigate).toHaveBeenCalledTimes(1);
  });

  test('debe de llamar el redirect si el hero no existe', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider-not-exist']}>
        <Routes>
          <Route path='/hero/:heroId' element={<HeroScreen />} />
          <Route path='/' element={<p>Hero no found</p>} />
        </Routes>
      </MemoryRouter>,
    );

    expect(wrapper.find('p').text().trim()).toBe('Hero no found');
  });
});
