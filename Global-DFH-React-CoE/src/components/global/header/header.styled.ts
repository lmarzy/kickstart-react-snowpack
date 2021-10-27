import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  background: var(--col-white);
  border-bottom: 1px solid var(--col-border);
`;

export const StyledHeaderInner = styled.div`
  display: flex;
  align-items: center;
  height: var(--height-xlarge);
`;

export const StyledBrand = styled(NavLink)`
  display: block;
  margin-right: var(--spacing-6);

  p {
    font-size: var(--size-2);
    color: var(--col-blue-medium);
  }

  &:hover,
  &:focus {
    text-decoration: none;
  }
`;

export const StyledChildren = styled.div`
  flex: 1;
`;
