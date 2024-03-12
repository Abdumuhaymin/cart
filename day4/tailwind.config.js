/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        small1: [
          "20px",
          {
            lineHeight: "32px",
            fontWeight: "500",
          },
        ],
        small2: [
          "25px",
          {
            lineHeight: "32px",
            fontWeight: "800",
          },
        ],
        small3: [
          "30px",
          {
            lineHeight: "32px",
            fontWeight: "500",
          },
        ],
        small4: [
          "35px",
          {
            lineHeight: "32px",
            fontWeight: "500",
          },
        ],
      },
      colors: {
        primary: "rgb(0, 113, 228)",
        secondary: "#6FD91C",
        headerBtn: "rgb(253, 239, 191)",
        black50: "rgb(112, 110, 110)",
      },
      fontFamily: {
        display: ["DM Serif Display"],
      },
      container: {
        center: true,
        padding: "20px",
        screens: {
          xl: "1240px",
        },
        screens: {
          md: "768px",
          lg: "992px",
          xl:"1240px"
        },
      },
    },
  },
  plugins: [],
};
