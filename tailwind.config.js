/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#282828",
          "200": "#1f1f1f",
          "300": "rgba(0, 0, 0, 0.38)",
          "400": "rgba(255, 255, 255, 0.31)",
        },
        white: "#fff",
        red: "#f40404",
        orange: "#ffb800",
        gainsboro: {
          "100": "#e5e7eb",
          "200": "#e5e5e5",
        },
        whitesmoke: "#f0f0f0",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        "segoe-ui": "'Segoe UI'",
        "font-awesome-5-brands": "'Font Awesome 5 Brands'",
        "font-awesome-5-free": "'Font Awesome 5 Free'",
        poppins: "Poppins",
      },
      borderRadius: {
        "9980xl": "9999px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      xs: "12px",
      "17xl": "36px",
      "5xl": "24px",
      "45xl": "64px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
