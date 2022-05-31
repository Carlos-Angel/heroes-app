import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import SearchScreen from 'components/Search/SearchScreen';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('Pruebas en <SearchScreen />', () => {
  test('debe de mostrarse correctamente con valores por defecto', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <SearchScreen />
      </MemoryRouter>,
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.alert-info').text().trim()).toBe('Search a hero');
  });

  test('debe de mostrar a batman y el input con el valor del queryString', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <SearchScreen />
      </MemoryRouter>,
    );

    expect(wrapper.find('input').prop('value')).toBe('batman');
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar un error si no se encuentra el hero', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=heroNotExist']}>
        <SearchScreen />
      </MemoryRouter>,
    );

    expect(wrapper.find('.alert-danger').text().trim()).toBe(
      'There is no a hero with heroNotExist',
    );
  });

  test('debe de llamar el navigate al buscar un héroe', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <SearchScreen />
      </MemoryRouter>,
    );

    wrapper.find('input').simulate('change', {
      target: {
        name: 'searchText',
        value: 'batman',
      },
    });

    const submit = wrapper.find('form').prop('onSubmit');
    submit({ preventDefault() {} });

    expect(mockNavigate).toHaveBeenCalledWith('?q=batman');
  });
});
