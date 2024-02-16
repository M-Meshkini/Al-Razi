/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: {
        100: "#1c291d",
        200: "#59a5f5",
        300: "#c8ffff",
      },
      accent: { 100: "#00BFFF", 200: "#1c291d" },
      text: { 100: "#1c291d", 200: "#5c5c5c" },
      bg: { 100: "#FFFFFF", 200: "#ccdbcd", 300: "#cccccc" },
    },
    fontFamily: {
      main: [
        "Oswald",
        // "system-ui",
        // "-apple-system",
        // "BlinkMacSystemFont",
        // "Segoe UI",
        // "Roboto",
        // "Helvetica Neue",
        // "Arial",
        // "Noto Sans",
        // "sans-serif",
        // "Apple Color Emoji",
        // "Segoe UI Emoji",
        // "Segoe UI Symbol",
        // "Noto Color Emoji",
      ],
    },
    extend: {},
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};