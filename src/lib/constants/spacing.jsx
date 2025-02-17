// spacing.js
const baseUnit = 8; // 10px as the base unit

const SPACING = {
  base: `${baseUnit}px`, // Base Unit for reference
  SIZE_01: `${baseUnit * 0.2}px`,
  SIZE_02: `${baseUnit * 0.3}px`,
  SIZE_03: `${baseUnit * 0.4}px`,
  SIZE_04: `${baseUnit * 0.5}px`,
  SIZE_08: `${baseUnit}px`,
  SIZE_16: `${baseUnit * 2}px`,
  SIZE_24: `${baseUnit * 3}px`,
  SIZE_32: `${baseUnit * 4}px`,
  SIZE_40: `${baseUnit * 5}px`,
  SIZE_48: `${baseUnit * 6}px`, // section padding
  SIZE_80: `${baseUnit * 10}px`,
};

// Function to calculate dynamic spacing
const calcSpacing = (multiplier) => `${multiplier * baseUnit}px`;

export { SPACING, calcSpacing };
