import React, { FC, Fragment } from 'react';

import { StyledDl } from './description.styled';

interface ListItem {
  term: string;
  description: string;
}

interface DescriptionProps {
  data: ListItem[];
}

export const Description: FC<DescriptionProps> = ({ data }) => (
  <StyledDl>
    {data.map((item: ListItem) => (
      <Fragment key={item.term}>
        <dt>{item.term}:</dt>
        <dd>{item.description}</dd>
      </Fragment>
    ))}
  </StyledDl>
);
