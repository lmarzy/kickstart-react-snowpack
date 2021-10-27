import { FeedbackType } from '../../shared/types-styles';

export const feedbackColors = (
  variant: FeedbackType
): { backgroundColor: string; borderColor: string } => {
  if (variant === 'info') {
    return {
      backgroundColor: 'skyblue-light',
      borderColor: 'skyblue-medium',
    };
  }

  if (variant === 'success') {
    return {
      backgroundColor: 'freshgreen-light',
      borderColor: 'freshgreen-medium',
    };
  }

  if (variant === 'warning') {
    return {
      backgroundColor: 'zestyorange-light',
      borderColor: 'zestyorange-medium',
    };
  }

  if (variant === 'error') {
    return {
      backgroundColor: 'spicyred-light',
      borderColor: 'spicyred-medium',
    };
  }

  return {
    backgroundColor: 'grey-xlight',
    borderColor: 'grey-light',
  };
};
