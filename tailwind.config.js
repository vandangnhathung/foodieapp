/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      ip11pro: "414px",
      pc: "1200px",
    },
    extend: {
      colors: {
        primary: "#FA4A0C",
        blackEase: "#252B42",
        greyLight: "#737373",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        hd: ["58px", "80px"],
        rhd: ["36px", "42.5px"],
        hc: ["40px", "57px"],
        ht: ["44px", "36px"],
        tl: ["24px", "36px"],
        tx: ["24px", "38px"],
        rtl: ["16px", "24px"],
        rtx: ["16px", "28px"],
      },
    },
  },
  plugins: [],
};
