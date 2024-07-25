/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        lg: "992px",
        xl: "1188px",
        xxl: "1480px",
        custom_xl: "1240px",
      },
      container: {
        padding: "24px",
        center: "true",
        screens: {
          sm: "576px",
          md: "768px",
          lg: "992px",
          xl: "1188px",
        },
      },
      lineHeight: {
        120: "120%",
        130: "130%",
        140: "140%",
        150: "150%",
        160: "160%",
      },
      colors: {
        primary: "#09384E",
        secondry: "#F87B54",
      },
      fontFamily: {
        norwester: ["Norwester", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        cate_cafe: "0px 22px 0px 0px #09384E",
        link: "0px 0px 12px",
      },
      fontSize: {
        sm: "14px",
        md: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "22px",
        "3xl": "24px",
        "4xl": "28px",
        "5xl": "30px",
        "6xl": "32px",
        "7xl": "36px",
        "8xl": "38px",
        "9xl": "40px",
        "12xl": "48px",
        "14xl": "52px",
        "18xl": "60px",
        "25xl": "74px",
      },
    },
  },
};
