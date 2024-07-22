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
        100: "100%",
        110: "110%",
        120: "120%",
        130: "130%",
        140: "140%",
        150: "150%",
        160: "160%",
        170: "170%",
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
        "10xl": "42px",
        "11xl": "44px",
        "12xl": "48px",
        "13xl": "50px",
        "14xl": "52px",
        "15xl": "54px",
        "16xl": "56px",
        "17xl": "58px",
        "18xl": "60px",
        "19xl": "62px",
        "20xl": "64px",
        "21xl": "66px",
        "22xl": "68px",
        "23xl": "70px",
        "24xl": "72px",
        "25xl": "74px",
      },
      backgroundColor: {
        bodybg: "#FCFBE3",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
};
