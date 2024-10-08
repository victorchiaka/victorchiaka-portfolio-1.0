/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "baby-blue": "#D4F1F4",
        "blue-green": "#75E6DA",
        "blue-grotto": "#189AB4",
        "navy-blue": "#05445E",
      },
      boxShadow: {
        "thin-border": "0 0 0 0.7px rgba(128, 128, 128, 0.9)",
        "thin-border-white": "0 0 0 0.7px rgba(255, 255, 255, 0.9)",
        "thin-border-light": "0 0 0 0.7px rgba(128, 128, 128, 0.1)",
        "thin-border-bottom": "0 0.7px 0 rgba(128, 128, 128, 0.9)",
        "thin-border-top": "0 -0.7px 0 rgba(128, 128, 128, 0.9)",
        "thin-border-x":
          "-0.7px 0 0 rgba(128, 128, 128, 0.2), 0.7px 0 0 rgba(128, 128, 128, 0.2)",
      },
      keyframes: {
        blink: {
          "0%, 50%": { opacity: "1" },
          "50.1%, 100%": { opacity: "0" },
        },
        grow: {
          "0%": {
            transform: "scale(1.4)",
          },
          "50%": {
            transform: "scale(1.6)",
          },
          "80%": {
            transform: "scale(1.4)",
          },
          "85%,90%, 95%": {
            transform: "scale(1.3)",
          },
          "97%": {
            transform: "scale(1.2)",
          },
          "98%, 99%": {
            transform: "scale(1.1)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        "slide-in-bottom": {
          "0%": {
            transform: "translateY(100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        "slide-in-right": {
          "0%": {
            transform: "translateX(100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        "slide-down-to-bottom": {
          "0%": {
            transform: "translateY(-400%)",
            opacity: "1",
          },
          "35%": {
            transform: "translateY(-200%)",
            opacity: "1",
          },
          "45%": {
            transform: "translateY(30%)",
            opacity: "1",
          },
          "65%": {
            transform: "translateY(-50%)",
            opacity: "1",
          },
          "75%": {
            transform: "translateY(-20%)",
            opacity: "1",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        bounce: {
          "0%, 100%": {
            transform: "translateY(-25%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        appear: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        rotate: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
      animation: {
        scalePulse: "scalePulse 2s ease-in-out infinite",
        blink: "blink 1s steps(2, start) infinite",
        grow: "grow 0.6s ease-out 1",
        "slide-in-bottom": "slide-in-bottom .5s ease-out 1 0.7s forwards",
        "slide-in-right": "slide-in-right .5s ease-out 1 0.7s forwards",
        appear: "appear .5s ease-out 1 1.7s forwards, bounce 1s infinite",
        "slide-down-to-bottom":
          "slide-down-to-bottom 0.8s ease-out 2.3s forwards, rotate 1s 3.3s forwards",
        rotate: "rotate 0.7s ease-in-out forwards",
      },
    },
    fontFamily: {
      comfortaa: ["comfortaa"],
      "ubuntu-mono": ["ubuntu mono"],
      asap: ["asap"],
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
