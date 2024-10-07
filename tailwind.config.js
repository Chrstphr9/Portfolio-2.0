/** @type {import('tailwindcss').Config} */
module.exports = {
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
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        pribg: '#27045B',
        pritxt: '#FFFFFF',
        secbg: '#6807f9',
        tetbg: '#9852f9',
        sectxt: '#FFD739'
      },
    },
  },
  plugins: [],
};
