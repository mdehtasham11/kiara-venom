/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins", "sans-serif"],
        heading: ["Maven Pro", "sans-serif"],
      },
      colors: {
        accent: "#121212",
        inverse: "#121212",
      },
    },
  },
  plugins: [],
};
