/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons"
      },
      screens: {
        xx: "320px",
        xs: "412px",
        ss: "620px",
        sm: "768px",
        md: "1020px",
        lg: "1024px",
        xl: "1700px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        pribg: '#27045B',
        pritxt: '#FFFFFF',
        secbg: '#6807f9',
        tetbg:  '#9852f9',
        sectxt: '#FFD739'
      },
    },
  },
  plugins: [],
};
