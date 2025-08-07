/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        custom_red: {
          500: "hsl(14, 86%, 42%)",
        },
        custom_green: {
          500: "hsl(159, 69%, 38%)",
        },
        custom_rose: {
          50: "hsl(20, 50%, 98%)",
          100: "hsl(13, 31%, 94%)",
          300: "hsl(14, 25%, 72%)",
          400: "hsl(7, 20%, 60%)",
          500: "hsl(14, 65%, 9%)",
        },
      },
    },
  },
  plugins: [],
};
