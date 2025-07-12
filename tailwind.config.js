/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        gridTemplateColumns: {
            // Simple 13 column grid
           '13': 'repeat(13, minmax(0, 1fr))',
        },
        gridColumn: {
            'span-1': 'span 1 / span 1',
        }
    },
  },
  plugins: [],
}
