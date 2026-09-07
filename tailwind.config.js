/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Inter", "sans-serif"],
        titleFont: ["Inter", "sans-serif"],
      },
      colors: {
        bodyColor: "#0f172a", // slate-900
        lightText: "#94a3b8", // slate-400
        boxBg: "rgba(30, 41, 59, 0.5)", // slate-800 with opacity for glassmorphism
        designColor: "#3b82f6", // blue-500
      },
      boxShadow: {
        shadowOne: "0 10px 30px -10px rgba(0,0,0,0.5)", // Subtler standard shadow
      },
    },
  },
  plugins: [],
};
