/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'editable': 'calc(100% - calc(70px*2))',
      },
      minWidth: {
        'editable': 'calc(100% - calc(70px*2))',
      },
      minHeight: {
        'editable' : '40px',
      }
    },
  },
  plugins: [],
}
