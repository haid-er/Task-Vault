/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6C63FF",
        "custom-primary": {
          100: "#6C63FF1f",
          200: "#6C63FF3f",
          300: "#6C63FF5f",
          400: "#6C63FF7f",
          500: "#6C63FF9f",
          600: "#6C63FFaf",
          700: "#6C63FFcf",
          800: "#6C63FFef",
        },
        secondary: "#252525",
        "custom-secondary": {
          100: "#2525251f",
          200: "#2525253f",
          300: "#2525255f",
          400: "#2525257f",
          500: "#2525259f",
          600: "#252525af",
          700: "#252525cf",
          800: "#252525ef",
        },
        tertiary: "#F7F7F7",
      },
    },
  },
  plugins: [],
};
