/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontSize: {
      sm: ["14px", "20px"],
      md: ["18px", "18px"],
      base: ["24px", "24px"],
      lg: ["40px", "40px"],
      xl: ["80px", "80px"],
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
