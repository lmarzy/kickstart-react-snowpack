import React, { FC } from 'react';

import {
  StyledSpacingTable,
  StyledSpace1,
  StyledSpace2,
  StyledSpace3,
  StyledSpace4,
  StyledSpace5,
  StyledSpace6,
} from './spacing.styled';

export const Spacing: FC = () => (
  <StyledSpacingTable>
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
        <td>6px</td>
        <td>0.375rem</td>
        <td>var(--spacing-1)</td>
        <td>
          <StyledSpace1></StyledSpace1>
        </td>
      </tr>
      <tr>
        <td>12px</td>
        <td>0.75rem</td>
        <td>var(--spacing-2)</td>
        <td>
          <StyledSpace2></StyledSpace2>
        </td>
      </tr>
      <tr>
        <td>18px</td>
        <td>1.125rem</td>
        <td>var(--spacing-3)</td>
        <td>
          <StyledSpace3></StyledSpace3>
        </td>
      </tr>
      <tr>
        <td>24px</td>
        <td>1.5rem</td>
        <td>var(--spacing-4)</td>
        <td>
          <StyledSpace4></StyledSpace4>
        </td>
      </tr>
      <tr>
        <td>30px</td>
        <td>1.875rem</td>
        <td>var(--spacing-5)</td>
        <td>
          <StyledSpace5></StyledSpace5>
        </td>
      </tr>
      <tr>
        <td>36px</td>
        <td>2.25rem</td>
        <td>var(--spacing-6)</td>
        <td>
          <StyledSpace6></StyledSpace6>
        </td>
      </tr>
    </tbody>
  </StyledSpacingTable>
);
