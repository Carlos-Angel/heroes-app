import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Navbar } from 'components/ui/Navbar';
import MarvelScreen from 'components/marvel/MarvelScreen';
import DcScreen from 'components/dc/DcScreen';
import HeroScreen from 'components/heroes/HeroScreen';
import SearchScreen from 'components/Search/SearchScreen';

export default function DashboardRoutes() {
  return (
    <>
      <Navbar />
      <div className='container mt-2'>
        <Routes>
          <Route path='marvel' element={<MarvelScreen />} />
          <Route path='dc' element={<DcScreen />} />
          <Route path='hero/:heroId' element={<HeroScreen />} />
          <Route path='search' element={<SearchScreen />} />
          <Route path='/' element={<MarvelScreen />} />
        </Routes>
      </div>
    </>
  );
}
