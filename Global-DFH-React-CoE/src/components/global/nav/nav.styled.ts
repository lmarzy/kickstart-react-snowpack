import styled from 'styled-components';

export const StyledNav = styled.ul`
  display: flex;
  border-left: 1px solid var(--col-border);

  li {
    border-right: 1px solid var(--col-border);
  }

  a {
    position: relative;
    display: flex;
    align-items: center;
    height: var(--height-xlarge);
    padding-left: var(--spacing-4);
    padding-right: var(--spacing-4);
    color: var(--col-grey);

    span + span {
      margin-left: var(--spacing-1);
    }

    &:hover,
    &:focus {
      background-color: var(--col-blue-light);
      text-decoration: none;
    }

    &.isActive {
      background-color: var(--col-grey-xlight);

      span:first-child {
        color: var(--col-blue-medium);
      }

      &::before {
        content: '';
        position: absolute;
        bottom: -1px;
        left: -1px;
        right: -1px;
        height: 2px;
        background-color: var(--col-blue-medium);
      }
    }
  }
`;
