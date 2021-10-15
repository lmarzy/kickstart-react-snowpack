import React, { FC } from 'react';

import { useQuery } from 'react-query';

import { Grid } from '~/components/shared';
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
      <Grid>
        <Grid.Item span={12} bpSm={6} bpMd={8} bpLg={11}>
          1
        </Grid.Item>
        <Grid.Item span={12} bpSm={6} bpMd={4} bpLg={1}>
          2
        </Grid.Item>
      </Grid>
    </>
  );
};
