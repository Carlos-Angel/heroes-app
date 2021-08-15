import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { mount } from 'enzyme';

import HeroScreen from '../../../components/heroes/HeroScreen';

describe('Pruebas en <HeroScreen />', () => {
  const historyMock = {
    length: 10,
    push: jest.fn(),
    goBack: jest.fn(),
  };

  const wrapper = mount(
    <MemoryRouter initialEntries={['/hero']}>
      <HeroScreen history={historyMock} />
    </MemoryRouter>,
  );

  test('debe de mostrar el componente redirect si no hay argumentos en la URL', () => {
    expect(wrapper.find('Redirect').exists()).toBe(true);
  });

  test('debe de mostrar un hero si el parámetro existe y se encuentra', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route exact path='/hero/:heroId' component={HeroScreen} />
      </MemoryRouter>,
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.row').exists()).toBe(true);
  });

  test('debe de regresar a la pantalla anterior con PUSH', () => {
    const historyMock = {
      length: 1,
      push: jest.fn(),
      goBack: jest.fn(),
    };

    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route
          exact
          path='/hero/:heroId'
          component={(props) => <HeroScreen history={historyMock} />}
        />
      </MemoryRouter>,
    );

    const button = wrapper.find('button').prop('onClick');
    button();

    expect(historyMock.push).toHaveBeenCalledWith('/');
    expect(historyMock.goBack).not.toHaveBeenCalled();
  });

  test('debe de regresar a la página anterior GO_BACK', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route
          exact
          path='/hero/:heroId'
          component={(props) => <HeroScreen history={historyMock} />}
        />
      </MemoryRouter>,
    );

    const button = wrapper.find('button').prop('onClick');
    button();

    expect(historyMock.push).toHaveBeenCalledTimes(0);
    expect(historyMock.goBack).toHaveBeenCalled();
  });

  test('debe de llamar el redirect si el hero no existe', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider-not-exist']}>
        <Route
          exact
          path='/hero/:heroId'
          component={(props) => <HeroScreen history={historyMock} />}
        />
      </MemoryRouter>,
    );

    expect(wrapper.text()).toBe('');
  });
});
