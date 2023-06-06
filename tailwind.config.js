/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js,ts}"],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 19px 25px rgba(0,0,0,0.30)",
          "0 15px 12px rgba(0, 0, 0, 0.25)",
        ],
      },
      fontSize: {
        "10xl": "font-size: 20%; line-height: 1;",
      },
      backgroundColor: {
        "blue-transparent": "rgba(109, 109, 109, 0.452)",
        "orange-navbar": "rgb(255, 102, 0)",
      },
      screens: {
        adr: "320px",
      },
    },
  },
  plugins: [],
};
