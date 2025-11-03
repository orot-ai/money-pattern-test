/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-blue': {
          50: '#f0f4ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#191e37',
        },
        'luxury-gold': {
          50: '#fefdf8',
          100: '#fefaec',
          200: '#fef2c7',
          300: '#fde68a',
          400: '#fad643',
          500: '#f7c41f',
          600: '#e6a814',
          700: '#c5941a',
          800: '#a1791c',
          900: '#856319',
          950: '#4d3509',
        },
      },
      backgroundImage: {
        'gradient-luxury': 'linear-gradient(135deg, #0f1429 0%, #191e37 25%, #242951 50%, #2f3564 75%, #3a4177 100%)',
        'gradient-deep': 'linear-gradient(135deg, #0f1429 0%, #191e37 50%, #242951 100%)',
        'gradient-gold': 'linear-gradient(135deg, #ffd700 0%, #ffec8c 15%, #ffd700 30%, #f7c41f 45%, #e6a814 60%, #c5941a 75%, #b8860b 90%, #daa520 100%)',
      },
    },
  },
  plugins: [],
}