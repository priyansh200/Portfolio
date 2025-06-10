/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3b82f6',
          dark: '#1d4ed8',
          light: '#60a5fa',
        },
        secondary: {
          DEFAULT: '#8b5cf6',
          dark: '#6d28d9',
          light: '#a78bfa',
        },
        dark: {
          DEFAULT: '#111827',
          light: '#1f2937',
          lighter: '#374151',
        },
        light: {
          DEFAULT: '#f9fafb',
          dark: '#f3f4f6',
          darker: '#e5e7eb',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      zIndex: {
        '-1': '-1',
        '-3': '-3',
        '-4': '-4',
        '-5': '-5',
        '-10': '-10',
      },
    },
  },
  plugins: [],
} 