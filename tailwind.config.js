/** @type {import('tailwindcss').Config} */

const colors = {
  background: {
    light: "#161616",
    dark: "#161616",
  },
  lbackground: {
    light: "#26393a",
    dark: "#26393a",
  },

  vgreen: {
    light: "#02e8ca",
    dark: "#02e8ca",
  },
  cgreen: {
    light: "#06fa99",
    dark: "#06fa99",
  },

  primary: {
    light: "#fe3488",
    dark: "#fe3488",
  },
  nav: {
    light: "#F8F1F9",
    dark: "#282B3E",
  },
  headings: {
    light: "#fe3488",
    dark: "#fe3488",
  },
  text: {
    light: "#d3e7e4",
    dark: "#d3e7e4",
  },
};

module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [],
  theme: {
    extend: {
      colors,
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto Mono", "mono", "serif"],
      },
      backdropBlur: {
        v: "3px",
      },
      dropShadow: {
        v: "6px 6px 6px rgba(0, 0, 0, 0.75)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-theme-shift")(colors, "dark", true),
  ],
};
