import React from 'react';
import HeroList from 'components/heroes/HeroList';

export default function MarvelScreen() {
  return (
    <>
      <h1>Heroes Marvel Comics</h1>
      <hr />
      <HeroList publisher='Marvel Comics' />
    </>
  );
}
