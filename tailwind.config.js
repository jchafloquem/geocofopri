/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  // corePlugins: {
  // 	preflight: false,
  // },
  proteger: true,
  content: [
    "./src/app/**/*.component.{html,ts}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: '0.5rem'/* 8px */,  /* 8px */
        s: '0.625rem',
        sm: '0.75rem',
        md: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3rem',
        '6xl': '3.5rem',
      },
      screens: {
        xs: '320px',
        s: '375px',
        sm: '425px',
        md: '768px',
        base: '1024px',
        lg: '1280px',
        xl: '1440px',
        '2xl': '1920px',
        '3xl': '2560px',
        '4xl': '3200px',
        '5xl': '3840px',

      },
    },
    container: {
      center: true,
    },

  },
}
