/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      screens: {
        xsm: "398px",
      },
      transitionProperty: {
        height: "height",
      },
      colors: {
        darkPurple: "#13013C",
        purple: "#3B2273",
        lightPurple: "#FAFBFF",
        green: "#027333",
        grey: "#828282",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      zIndex: {
        100: "100",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
