/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3b82f6',
          dark: '#2563eb',
        },
        secondary: {
          DEFAULT: '#8b5cf6',
        },
        accent: {
          pink: '#ec4899',
          purple: '#8b5cf6',
          blue: '#3b82f6',
          cyan: '#06b6d4',
          orange: '#f59e0b',
          green: '#10b981',
        }
      },
      animation: {
        'gradient-shift': 'gradientShift 20s ease infinite',
        'float': 'float 8s ease-in-out infinite',
        'falling-flower': 'fallingFlower 12s ease-in infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-30px) scale(1.05)' },
        },
        fallingFlower: {
          '0%': { top: '-10%', opacity: '0', transform: 'translateX(0) rotate(0deg)' },
          '10%': { opacity: '0.8' },
          '80%': { opacity: '0.8' },
          '100%': { top: '110%', opacity: '0', transform: 'translateX(100px) rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
