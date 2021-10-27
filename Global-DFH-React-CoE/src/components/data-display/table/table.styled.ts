import styled from 'styled-components';

export const StyledTable = styled.table`
  border-collapse: separate;
  text-align: left;
  border: 1px solid var(--col-border);
  border-radius: var(--border-radius);

  tbody tr:nth-child(even) {
    background-color: var(--col-grey-xlight);
  }

  th,
  td {
    padding: var(--spacing-2);
  }

  th {
    background-color: var(--col-blue-light);
    font-weight: normal;
  }

  tbody td {
    border-top: 1px solid var(--col-border);
  }
`;
