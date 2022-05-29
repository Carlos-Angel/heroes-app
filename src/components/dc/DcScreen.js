import React from 'react';
import HeroList from 'components/heroes/HeroList';

export default function DcScreen() {
  return (
    <>
      <h1>Heroes DC Comics</h1>
      <hr />
      <HeroList publisher='DC Comics' />
    </>
  );
}
