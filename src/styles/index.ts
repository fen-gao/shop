import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      white: "#FFF",

      gray100: "#E1E1E6",
      gray200: "#C4C4CC",
      gray400: "#202024",
      gray900: "#121214",

      green300: "#00B37E",
      green500: "#00875F",
    },
    fontSizes: {
      $normal: "1.125rem",
      $medium: "1.25rem",
      $large: "1.5rem",
      $xlarge: "2rem",
    },
  },
  media: {
    bp1: "(min-width: 480px)",
  },
});
