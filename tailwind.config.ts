import type { Config } from 'tailwindcss'

const defaultTheme = require("tailwindcss/defaultTheme");
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
      screens: {
      xs: "423px",
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
      animation: {
        blob: "blob 15s linear infinite",
        spain: "spain 60s linear 0s infinite",
        spainSlow: "spain 53s linear 0s infinite",
        spainMedium: "spain 43s linear 0s infinite",
        spainFast: "spain 33s linear 0s infinite",
        spainXFast: "spain 13s linear 0s infinite",
        spainXLFast: "spain 9s linear 0s infinite",
      },

      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0%, 0%) ",
          },
          "33%": {
            transform: "translate(300%, 50%) ",
          },
          "66%": {
            transform: "translate(-100%, -150%) ",
          },
          "100%": {
            transform: "translate(0%, 0%) ",
          },
        },
        spain: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(359deg)",
          },
        },
        fluid: {
          "0%": {
            backgroundPosition: "0 0%",
          },
          "50%": {
            backgroundPosition: "300% 50%",
          },
          "100%": {
            backgroundPosition: "0 50%",
          },
        },
      }
  },
  plugins: [],
}
export default config
