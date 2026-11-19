/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hitamdov: "#26282B",
        putihsusu: "#F4EEE0",
        maroon: "#E03F4F",
      },
    },
  },
};