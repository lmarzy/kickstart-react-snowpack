// ========================================================================
// GLOBAL/BASE/NORMALISE
// ========================================================================

export const normalise = `
  h1,
  h2,
  h3,
  h4 {
    font-size: inherit;
    font-weight: inherit;
  }

  ol,
  ul {
    list-style: none;
  }

  small {
    font-size: 80%;
    line-height: normal;
  }

  strong {
    font-weight: bold;
  }

  fieldset {
    border: 0;
  }

  legend {
    color: inherit;
  }

  button,
  input,
  select,
  textarea {
    font: inherit;
    cursor: pointer;
    outline: 0;
  }

  button {
    background: none;
    border: none;
    padding: 0;
  }
`;
