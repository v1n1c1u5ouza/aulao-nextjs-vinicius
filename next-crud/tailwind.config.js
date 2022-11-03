/** @type {import('tailwindcss').Config} */
module.exports = {

  purge: [
  "./src/pages/**/*.{js,ts,jsx,tsx}",
  "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  media: false,
  theme: {
  extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}