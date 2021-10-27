import styled, { css } from 'styled-components';

import { feedbackColors } from '../../..';
import { FeedbackType, HeightType } from '../../../shared/types-styles';
import { vr } from '../../../styles/utils/vr';

interface StyledSpanProps {
  $type: FeedbackType;
  $height: HeightType;
}

export const StyledSpan = styled.span<StyledSpanProps>`
  display: inline-flex;
  align-items: center;
  height: var(--height-${({ $height }) => $height});
  padding-left: var(--spacing-2);
  padding-right: var(--spacing-2);
  background-color: ${({ $type }) =>
    `var(--col-${feedbackColors($type).backgroundColor})`};
  border-width: 1px;
  border-style: solid;
  border-color: ${({ $type }) => `var(--col-${feedbackColors($type).borderColor})`};
  border-radius: 25px;

  ${({ $height }) =>
    $height === 'small' &&
    css`
      font-size: var(--size-1);
      line-height: ${vr(2)};
    `};
`;
