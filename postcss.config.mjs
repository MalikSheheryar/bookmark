const config = {
  plugins: ['@tailwindcss/postcss'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        sans: ['Poppins', 'system-ui', 'sans-serif'], // This makes Poppins the default sans font
      },
    },
  },
}

export default config
