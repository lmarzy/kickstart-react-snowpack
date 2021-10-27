import styled from 'styled-components';

import { feedbackColors } from '../../..';
import { FeedbackType } from '../../../shared/types-styles';

interface StyledSpanProps {
  $type: FeedbackType;
}

export const StyledSpan = styled.span<StyledSpanProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--height-tiny);
  height: var(--height-tiny);
  font-size: var(--size-1);
  background-color: ${({ $type }) =>
    `var(--col-${feedbackColors($type).backgroundColor})`};
  border-width: 1px;
  border-style: solid;
  border-color: ${({ $type }) => `var(--col-${feedbackColors($type).borderColor})`};
  border-radius: 50%;
`;
