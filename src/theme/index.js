import { createTheme as createMuiTheme } from "@mui/material";
import { createShadows } from "./createShadows";
import { createTypography } from "./createTypography";

export function createTheme() {
  const shadows = createShadows();
  const typography = createTypography();

  const theme = createMuiTheme();

  return createMuiTheme(theme, {
    breakpoints: {
      values: {
        xs: 0, // Extra small
        sm: 576, // Small
        md: 768, // Medium
        lg: 992, // Large
        xl: 1200, // X-Large
        xxl: 1400, // XX-Large
      },
    },
    shadows,
    shape: {
      borderRadius: 8,
    },
    typography,
  });
}
