import React, { FC } from 'react';
import { useQuery } from 'react-query';

import { getStarWars } from '~/shared/api';
import { StarWarsModel } from '~/shared/models';

export const HomePage: FC = () => {
  const { data, isLoading } = useQuery<StarWarsModel>('clientSearch', () =>
    getStarWars('people/1')
  );

  if (isLoading) return <p>Loading...</p>;

  console.log(data);

  return (
    <>
      <h1>Home Page</h1>
      <p>{data.name}</p>
    </>
  );
};
