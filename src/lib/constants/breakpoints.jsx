export const BREAKPOINT_SIZES = {
  XS: "XS",
  S: "S",
  M: "M",
  L: "L",
  XL: "XL",
  XXL: "XXL",
};

export const BREAKPOINTS = {
  XS: 0, // Extra small
  S: 576, // Small
  M: 768, // Medium
  L: 992, // Large
  XL: 1200, // X-Large
  XXL: 1400, // XX-Large
};

const breakpointsEntries = Object.entries(BREAKPOINTS);

// Generates an object such as
// { SMALL: `min-width: ${Breakpoints.SMALL}px`, ... }
export const MQ = Object.fromEntries(
  new Map(breakpointsEntries.map(([mq, value]) => [mq, `@media(min-width: ${value}px)`]))
);

// Generates an object such as
// { SMALL: `min-width: ${Breakpoints.SMALL}px and max-width: ${Breakpoints.MEDIUM - 1}px`, ... }
export const MQ_MMW = Object.fromEntries(
  new Map(
    breakpointsEntries.map(([mq, value], index) => {
      if (index < breakpointsEntries.length - 1) {
        return [
          mq,
          `@media (min-width: ${value}px) and (max-width: ${
            breakpointsEntries[index + 1][1] - 1
          }px)`,
        ];
      }
      return [mq, `@media(min-width: ${value}px)`];
    })
  )
);

export function calculateBreakpoint(width) {
  if (width < BREAKPOINTS.M) {
    return BREAKPOINT_SIZES.S;
  }
  if (width < BREAKPOINTS.L) {
    return BREAKPOINT_SIZES.M;
  }
  if (width < BREAKPOINTS.XL) {
    return BREAKPOINT_SIZES.L;
  }
  return BREAKPOINT_SIZES.XL;
}
