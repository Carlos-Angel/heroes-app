import React from 'react';
import HeroList from '../heroes/HeroList';

export default function MarvelScreen() {
  return (
    <>
      <h1>DcScreen</h1>
      <hr />
      <HeroList publisher='Marvel Comics' />
    </>
  );
}
