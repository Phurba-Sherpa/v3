import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          200: "#233554",
          300: "#112240",
          DEFAULT: "#0a192f",
          500: "#020c1b",
        },
        green: {
          DEFAULT: "#64ffda",
        },
        slate: {
          200: "#ccd6f6",
          300: "#a8b2d1",
          DEFAULT: "#8892b0",
          500: "#495670",
        },
        blue: {
          DEFAULT: "#57cbff",
        },
        white: {
          DEFAULT: "#e6f1ff",
        },
        pink: {
          DEFAULT: "#f57dff",
        },
      },

      fontFamily: {
        sans: ["Calibre", "Inter", "SF Pro Text"],
        mono: ["SF Mono", "Fira Code", "Roboto Mono"],
      },
    },
  },
  plugins: [],
};
export default config;
