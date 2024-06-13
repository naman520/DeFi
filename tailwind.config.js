/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-teal': '#064e3b',
        'dark-blue': '#1e3a8a',
      },
      keyframes: {
        customPulse: {
          '0%, 100%': { opacity: 0.9 },
          '50%': { opacity: 0.8 }, // Adjust the opacity here for less prominence
        },
      },
      animation: {
        customPulse: 'customPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}

