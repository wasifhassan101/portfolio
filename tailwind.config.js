/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'light-gray': '#B1B1B1',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'yellow': '#f1f952'
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'roboto-light': ['RobotoLight', 'sans-serif'],
        'roboto-bold': ['RobotoBold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
