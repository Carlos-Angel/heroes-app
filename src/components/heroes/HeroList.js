import React from 'react';
import { getHeroesByPublisher } from '../selectors/getHeroesByPublisher';
import HeroCard from './HeroCard';

export default function HeroList({ publisher }) {
  const heroes = getHeroesByPublisher(publisher);

  return (
    <div className='card-columns'>
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
}
