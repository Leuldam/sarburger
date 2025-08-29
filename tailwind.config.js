/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
       
  ],
   theme: {
    extend: {
      fontFamily: {
        'post-no-bills': ['"Post No Bills Jaffna"', 'sans-serif'],
      },
      fontSize: {
        'xxl': ['40px', { lineHeight: '100%' }],
      },
      fontWeight: {
        'extrabold': '800',
      },
      letterSpacing: {
        'none': '0%',
      },
    },
  },
  plugins: [],
};
