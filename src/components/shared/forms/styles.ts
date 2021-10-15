import styled from 'styled-components';

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  height: var(--height-medium);
  padding: var(--spacing-2);
  background: var(--col-blue-light);
  border: 1px solid var(--col-border);
  border-radius: var(--border-radius);
  transition: border-color 0.2s ease-in;

  &:hover,
  &:focus {
    border-color: var(--col-blue-medium);
  }

  &:focus {
    background: var(--col-white);
  }
`;

export const StyledTextarea = styled(StyledInput as 'textarea').attrs({
  as: 'textarea',
})`
  height: auto;
`;

export const StyledSelect = styled(StyledInput as 'select').attrs({
  as: 'select',
})``;
