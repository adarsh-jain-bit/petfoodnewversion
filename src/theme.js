"use client"
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { FONT_FAMILY, FONT_SIZES, FONT_WEIGHT } from "../src/lib/constants/typography";
import { SPACING } from "../src/lib/constants/spacing";

import { COLORS } from "../src/lib/constants/colors";
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});
const myTheme = createTheme({
    colors: COLORS,
    fontSizes: FONT_SIZES,
    sizes: SPACING,
    fontWeight: FONT_WEIGHT,
    fontFamily: FONT_FAMILY,
});

export default theme;
