import React, { FC } from 'react';

import { StyledFontSize } from './typography.styles';

export const Typography: FC = () => (
  <>
    <StyledFontSize>
      <p style={{ fontSize: 'var(--size-1)' }}>Font Size 1</p>
      <p>12px / 0.75rem</p>
      <p>var(--size-1)</p>
    </StyledFontSize>
    <StyledFontSize>
      <p style={{ fontSize: 'var(--size-2)' }}>Font Size 2</p>
      <p>114px / 0.875rem</p>
      <p>var(--size-2)</p>
    </StyledFontSize>
    <StyledFontSize>
      <p style={{ fontSize: 'var(--size-3)' }}>Font Size 3</p>
      <p>18px / 1.125rem</p>
      <p>var(--size-3)</p>
    </StyledFontSize>
    <StyledFontSize>
      <p style={{ fontSize: 'var(--size-4)' }}>Font Size 4</p>
      <p>20px / 1.25rem</p>
      <p>var(--size-4)</p>
    </StyledFontSize>
    <StyledFontSize>
      <p style={{ fontSize: 'var(--size-5)' }}>Font Size 5</p>
      <p>22px / 1.375rem</p>
      <p>var(--size-5)</p>
    </StyledFontSize>
    <StyledFontSize>
      <p style={{ fontSize: 'var(--size-6)' }}>Font Size 6</p>
      <p>30px / 1.875rem</p>
      <p>var(--size-6)</p>
    </StyledFontSize>
  </>
);
