/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#C8A99C",
      },
      boxShadow: {
        "lg-top": " 0 0 20px 1px rgba(0,0,0,0.2) ",
      },
      animation: {
        "slide-top":
          "slide-top 0.5s cubic-bezier(0.165, 0.840, 0.440, 1.000)    both",
      },
      keyframes: {
        "slide-top": {
          "0%": {
            transform: "translateY(100px)",
          },
          to: {
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
