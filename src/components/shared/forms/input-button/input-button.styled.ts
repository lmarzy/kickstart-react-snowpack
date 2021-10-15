import styled from 'styled-components';

export const StyledLabel = styled.label`
  display: block;
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

export const StyledSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--height-medium);
  padding: var(--spacing-2);
  text-align: center;
  background-color: var(--col-white);
  border: 1px solid var(--col-border);
  border-radius: var(--border-radius);
  transition: 0.2s ease-in;
`;

export const StyledInput = styled.input`
  position: absolute;
  top: -100px;
  left: -100px;

  &:hover,
  &:focus {
    & ~ ${StyledSpan} {
      border-color: var(--col-blue-medium);
    }
  }

  &:checked ~ ${StyledSpan} {
    border-color: var(--col-border);
    background-color: var(--col-blue-light);
    color: var(--col-blue);
  }
`;
