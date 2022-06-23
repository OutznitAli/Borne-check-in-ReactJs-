module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Signika: ['Signika', 'sans-serif'],
        Franklin: ['Libre Franklin', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
}
