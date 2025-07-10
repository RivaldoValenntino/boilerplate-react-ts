/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#3060FF",
        whiteCust: "#EEF0FD",
        orangeCust: "#F87931",
        blackCust: "#222222",
        secondary: "#1F50F5",
      },
    },
  },
  plugins: [],
};
