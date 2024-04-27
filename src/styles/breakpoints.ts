export const sizes = {
  xxs: 0,
  xs: 35, // 560px
  sm: 48, // 768px
  md: 62, // 992px
  lg: 80, // 1280px
  xl: 90  // 1440px
};

export const breakpoints = {
  xxs: `(max-width: ${sizes.xxs}rem)`,
  xs: `(max-width: ${sizes.xs}rem)`,
  sm: `(max-width: ${sizes.sm}rem)`,
  md: `(max-width: ${sizes.md}rem)`,
  lg: `(max-width: ${sizes.lg}rem)`,
  xl: `(max-width: ${sizes.xl}rem)`
};

export const sizesVertical = {
  xs: 0,
  sm: 37.5 // 600px
};

export const breakpointsVertical = {
  xs: `(max-height: ${sizesVertical.xs}rem)`,
  sm: `(max-height: ${sizesVertical.sm}rem)`
};