/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./app/**/*.{js,ts,jsx,tsx,mdx,html}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx,html}",
  "./components/**/*.{js,ts,jsx,tsx,mdx,html}",
  "./src/**/*.{js,ts,jsx,tsx,mdx,html}",
],

  theme: {
    extend: {
      colors: {
        "baby-powder": '#F2F5EF',
        "deep-dark": '#292A27',
        "avocado": '#B4D672',
        "avocado-dark": '#5A7F2E'

      },
      screens: {
        'ph': '340px',
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
      require('tailwindcss-animate')
  ],
}

