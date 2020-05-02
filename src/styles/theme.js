import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const theme = createMuiTheme({
  // Overrides from default Material-UI theme
  // Ref https://material-ui.com/customization/default-theme/
  typography: {
    fontFamily: ["Helvetica", "sans-serif"].join(","),
  },

  // Material-UI component overrides
  overrides: {
    MuiButton: {
      containedSecondary: {
        "&:hover": {
          backgroundColor: "#00C2D8",
        },
      },
    },
  },

  // Own generic properties
});

const themeWithFonts = responsiveFontSizes(theme);

export default themeWithFonts;
