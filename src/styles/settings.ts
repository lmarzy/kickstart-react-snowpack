// ========================================================================
// CORE SETTINGS
// ========================================================================

export const baseFontSize = 16;
export const baselineHeight = 16 * 1.5;

export const fontFamily =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'";
export const fontSizePx = baseFontSize;
export const lineHeight = 1.5;
export const lineHeightPx = fontSizePx * lineHeight;

export const fontSizesPx = {
  1: 14,
  2: 20,
  3: 28,
  4: 40,
};

export type BreakpointValues = 'sm' | 'md';

export const breakpoints: Record<BreakpointValues, number> = {
  sm: 600,
  md: 1000,
};
