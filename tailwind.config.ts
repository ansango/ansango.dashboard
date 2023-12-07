/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      height: {
        "dynamic-screen": "100dvh",
      },
      minHeight: {
        "dynamic-screen": "100dvh",
      },
      maxHeight: {
        "dynamic-screen": "100dvh",
      },
    },
  },
  plugins: [require('@tailwindcss/container-queries'),require("tailwindcss-animate")],
};
