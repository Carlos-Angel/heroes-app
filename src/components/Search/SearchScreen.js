import React, { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import HeroCard from 'components/heroes/HeroCard';
import { useForm } from 'hooks/useForm.hook';
import { getHeroesByName } from 'selectors/getHeroesByName';

export default function SearchScreen() {
  const location = useLocation();
  const navigate = useNavigate();
  const { q = '' } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({ searchText: q });
  const { searchText } = formValues;

  const herosFiltered = useMemo(() => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <div>
      <div className='row'>
        <div className='col-5'>
          <h4>Find your hero</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type='text'
              placeholder='Find your hero'
              className='form-control'
              name='searchText'
              autoComplete='off'
              value={searchText}
              onChange={handleInputChange}
            />

            <button type='submit' className='btn mt-3 btn-block btn-outline-primary'>
              Search
            </button>
          </form>
        </div>
        <div className='col-7'>
          <h4>Results</h4>
          <hr />

          {q === '' && <div className='alert alert-info'>Search a hero</div>}

          {q !== '' && herosFiltered.length === 0 && (
            <div className='alert alert-danger'>There is no a hero with {q}</div>
          )}

          {herosFiltered.map((hero) => {
            return <HeroCard key={hero.id} {...hero} />;
          })}
        </div>
      </div>
    </div>
  );
}
