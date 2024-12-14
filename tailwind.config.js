/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFF8F3",
        red: "#FF684B",
        "primary-fair": "#FFE6C8",
        "primary-mid": "#FFF0DD",
        "primary-bold": "#FFE6D1",
      },
      fontFamily: {
        "TSP-bold": ["TSP-bold", "sans-serif"],
        "TSP-light": ["TSP-light", "sans-serif"],
        "TSP-medium": ["TSP-medium", "sans-serif"],
        roboto: "Roboto",
      },
    },
  },
  plugins: [],
};
