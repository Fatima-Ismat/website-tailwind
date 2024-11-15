import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#31241c',  // Dark brownish color
        secondary: '#f4361c', // Red
        pink: '#faf4f5', // Light pink
      },
      fontFamily: {
        cursive: ['Miniver', 'sans-serif'],  // Custom font
      },
    },
  },
  plugins: [],
};

export default config;
