/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63"
        },
        ink: "#06131f",
        cream: "#f8f4eb",
        coral: "#ff7a59",
        gold: "#f4c26b"
      },
      boxShadow: {
        glow: "0 24px 80px rgba(34, 211, 238, 0.18)",
        soft: "0 18px 50px rgba(6, 19, 31, 0.12)"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(148, 163, 184, 0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.14) 1px, transparent 1px)"
      },
      fontFamily: {
        display: ['\"Sora\"', "sans-serif"],
        body: ['\"Manrope\"', "sans-serif"]
      }
    }
  },
  plugins: []
};
