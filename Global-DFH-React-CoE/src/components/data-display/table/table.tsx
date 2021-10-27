import React, { FC } from 'react';

import { StyledTable } from './table.styled';

interface TableProps {
  headings: string[];
}

export const Table: FC<TableProps> = ({ headings, children }) => (
  <StyledTable>
    <thead>
      <tr>
        {headings.map((heading: string) => (
          <th key={heading}>{heading}</th>
        ))}
      </tr>
    </thead>
    <tbody>{children}</tbody>
  </StyledTable>
);
