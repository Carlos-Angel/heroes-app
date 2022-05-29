import { heroes } from 'data/heroes';

const VALID_PUBLISHERS = ['DC Comics', 'Marvel Comics'];

export const getHeroesByPublisher = (publisher) => {
  if (!VALID_PUBLISHERS.includes(publisher)) {
    throw new Error(`Publisher "${publisher}" nor found`);
  }

  return heroes.filter((hero) => hero.publisher === publisher);
};
