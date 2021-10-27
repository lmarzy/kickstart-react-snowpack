import React, { FC } from 'react';

import {
  StyledHeightsTable,
  StyledHeightsTiny,
  StyledHeightsSmall,
  StyledHeightsMedium,
  StyledHeightsLarge,
} from './heights.styled';

export const Heights: FC = () => (
  <StyledHeightsTable>
    <thead>
      <tr>
        <th>PX Value</th>
        <th>Rem Value</th>
        <th>CSS Custom Property</th>
        <th>Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>24px</td>
        <td>1.5rem</td>
        <td>var(--height-tiny)</td>
        <td>
          <StyledHeightsTiny></StyledHeightsTiny>
        </td>
      </tr>
      <tr>
        <td>30px</td>
        <td>1.875rem</td>
        <td>var(--height-small)</td>
        <td>
          <StyledHeightsSmall></StyledHeightsSmall>
        </td>
      </tr>
      <tr>
        <td>42px</td>
        <td>2.625rem</td>
        <td>var(--height-medium)</td>
        <td>
          <StyledHeightsMedium></StyledHeightsMedium>
        </td>
      </tr>
      <tr>
        <td>60px</td>
        <td>3.75rem</td>
        <td>var(--height-large)</td>
        <td>
          <StyledHeightsLarge></StyledHeightsLarge>
        </td>
      </tr>
    </tbody>
  </StyledHeightsTable>
);
