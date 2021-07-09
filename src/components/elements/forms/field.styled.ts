import styled from 'styled-components';

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: var(--spacing-1);
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  height: var(--height-medium);
  padding: var(--spacing-2);
  border: 1px solid var(--col-border);
  transition: border-color 0.2s ease-in;

  &:hover,
  &:focus {
    border-color: var(--col-blue);
  }
`;

export const StyledTextarea = styled(StyledInput as 'textarea').attrs({
  as: 'textarea',
})`
  height: auto;
`;

export const StyledSelect = styled(StyledInput as 'select').attrs({
  as: 'select',
})`
  border-radius: 0;
  padding-top: 0;
  padding-bottom: 0;
`;
