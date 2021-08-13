import { heroes } from '../data/heroes';

export const getHeroesByName = (search = '') => {
  const name = search.toLocaleLowerCase();
  return name !== ''
    ? heroes.filter((hero) => hero.superhero.toLocaleLowerCase().includes(name))
    : [];
};
