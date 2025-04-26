/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        secondary: {
          50: '#f5f7fa',
          100: '#ebeef5',
          200: '#dde1ee',
          300: '#c7cee3',
          400: '#abb6d3',
          500: '#8e9cc0',
          600: '#7f8cb3',
          700: '#6d799a',
          800: '#59647e',
          900: '#4a5366',
          950: '#292e3a',
        },
        accent: {
          50: '#fffaeb',
          100: '#fef0c7',
          200: '#fee089',
          300: '#fdc94b',
          400: '#fdb022',
          500: '#f79009',
          600: '#dc6803',
          700: '#b54708',
          800: '#93370d',
          900: '#7a2e0e',
          950: '#43140a',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1920')",
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
    },
  },
  plugins: [],
};