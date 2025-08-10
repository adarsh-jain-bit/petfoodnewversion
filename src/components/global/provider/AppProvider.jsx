"use client"
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { FONT_FAMILY, FONT_SIZES, FONT_WEIGHT } from "../../../lib/constants/typography";
import { SPACING } from "../../../lib/constants/spacing";
import { COLORS } from "../../../lib/constants/colors";
import  {createTheme} from "../../../theme/index"
import ReduxProvider from "../../../redux/ReduxProvider";
import React from "react";
const theme = createTheme();

const myTheme = {
  ...theme,
  colors: COLORS,
  fontSizes: FONT_SIZES,
  sizes: SPACING,
  fontWeight: FONT_WEIGHT,
  fontFamily: FONT_FAMILY,
};

function AppProviders({ children }) {

  return (
      <MuiThemeProvider theme={myTheme}>
        <ThemeProvider theme={myTheme}>
            <CssBaseline />
                <ReduxProvider>
                {children}
                </ReduxProvider>
        </ThemeProvider>
      </MuiThemeProvider>
  );
}

export default AppProviders;
