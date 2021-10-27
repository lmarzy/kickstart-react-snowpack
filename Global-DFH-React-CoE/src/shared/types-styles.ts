export type FontSizeType = 1 | 2 | 3 | 4 | 5 | 6;

export type SpacingType = 1 | 2 | 3 | 4 | 5 | 6;

export type HeightType = 'small' | 'medium' | 'large';

export type ColorMainType =
  | 'grey'
  | 'blue'
  | 'green'
  | 'skyblue'
  | 'freshgreen'
  | 'spicyred'
  | 'zestyorange';

export type ColorAltType =
  | 'blue-medium'
  | 'blue-light'
  | 'green-medium'
  | 'green-light'
  | 'skyblue-medium'
  | 'skyblue-light'
  | 'freshgreen-medium'
  | 'freshgreen-light'
  | 'spicyred-medium'
  | 'spicyred-light'
  | 'zestyorange-medium'
  | 'zestyorange-light'
  | 'grey-medium'
  | 'grey-light'
  | 'grey-xlight';

export type ColorAllType = ColorMainType | ColorAltType;

export type FontWeightType = 500 | 600;

export type FeedbackType = 'info' | 'success' | 'warning' | 'error';
