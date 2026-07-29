/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}",],
  theme: {
    extend: {
      
        colors: {
          ink: '#1F1B18',
          stage: '#14131B',
          stage2: '#1C1A26',
          paper: '#F7F1E4',
          paperline: '#E4D9C0',
          gold: '#C6963A',
          goldlight: '#E4C583',
          teal: '#2F6B63',
          rose: '#B5484B',
        },
        fontFamily: {
          display: ['Fraunces', 'serif'],
          ui: ['Inter', 'sans-serif'],
          mono: ['"Space Mono"', 'monospace'],
        },
    },
  },
  plugins: [],
}

