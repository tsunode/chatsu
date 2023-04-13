/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "dark-1": "#0F1A0E",
      "dark-2": "#27371A",
      "dark-3": "#1D1C1C",
      "green-1": "#3EC863",
      "green-opacity-1": "rgba(217, 217, 217, 0.22)",
      "green-opacity-2": "rgba(217, 217, 217, 0.41);",
      "white-1": "#FFFFFF",
      transparent: "transparent",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      spacing: {
        spacing: {
          0: "0",
          1: "0.4rem",
          2: "0.8rem",
          3: "1.2rem",
          4: "1.6rem",
          5: "2rem",
          6: "2.4rem",
          7: "2.8rem",
          8: "3.2rem",
          9: "3.6rem",
          10: "4rem",
          12: "4.8rem",
          16: "6.4rem",
          20: "8rem",
          24: "9.6rem",
          32: "12.8rem",
          40: "16rem",
          48: "19.2rem",
          56: "22.4rem",
          64: "25.6rem",
        },
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
