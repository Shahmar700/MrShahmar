/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        200: "200px",
      },
      width: {
        0.23: "23%",
        0.95: "95%",
      },
      colors: {
        navBg: "#040836",
      },
      height: {
        "410px": "410px",
        "170px": "170px",
      },
      screens: {
        "500px": "500px",
        // => @media (min-width: 500px) { ... }

        "400px": "400px",
        // => @media (min-width: 400px) { ... }

        "825px": "825px",
        // => @media (min-width: 825px) { ... }

        "1100px": "1100px",
        // => @media (min-width: 1100px) { ... }
      },
    },
  },
  plugins: [],
};
