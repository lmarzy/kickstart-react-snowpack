import styled from 'styled-components';

export const StyledUserMenu = styled.ul`
  display: flex;
  align-items: center;

  li:first-child {
    padding-right: var(--spacing-2);
    margin-right: var(--spacing-2);
    border-right: 1px solid var(--col-border);
  }
`;

export const StyledLogoutButton = styled.button`
  display: flex;
  padding: var(--spacing-1);
  align-items: center;
  transition: transform var(--transition-speed) ease-in;

  &:hover,
  &:focus {
    transform: translateX(2px);
  }
`;
