import React, { useMemo } from 'react';
import { getHeroesByPublisher } from 'selectors/getHeroesByPublisher';
import HeroCard from 'components/heroes/HeroCard';

export default function HeroList({ publisher }) {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className='card-columns animate__animated animate__fadeIn'>
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
}
