import styled from 'styled-components';

import { feedbackColors } from '../../../styles/utils/';
import { FeedbackType } from '../../../shared/types-styles';

interface StyledAlertProps {
  $type: FeedbackType;
}

export const StyledAlert = styled.span<StyledAlertProps>`
  display: flex;
  align-items: center;
  height: var(--height-medium);
  padding-left: var(--spacing-2);
  padding-right: var(--spacing-2);
  background-color: ${({ $type }) =>
    `var(--col-${feedbackColors($type).backgroundColor})`};
  border-width: 1px 1px 1px 4px;
  border-style: solid;
  border-color: ${({ $type }) => `var(--col-${feedbackColors($type).borderColor})`};
  border-radius: var(--border-radius);
`;
