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
        "slide-bottom":
          "slide-bottom 0.5s cubic-bezier(0.165, 0.840, 0.440, 1.000)    both",
        "slide-left":
          "slide-top 0.5s cubic-bezier(0.165, 0.840, 0.440, 1.000)    both",
        "slide-right":
          "slide-bottom 0.5s cubic-bezier(0.165, 0.840, 0.440, 1.000)    both",
      },
      keyframes: {
        "slide-top": {
          "0%": {
            transform: "translateY(500px)",
          },
          to: {
            transform: "translateY(0)",
          },
        },
        "slide-bottom": {
          "0%": {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(500px)",
          },
        },
        "slide-left": {
          "0%": {
            transform: "translateX(100px)",
          },
          to: {
            transform: "translateX(0)",
          },
        },
        "slide-right": {
          "0%": {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(100px)",
          },
        },
      },
    },
  },
  plugins: [],
};
