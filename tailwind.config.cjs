module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{js,svelte}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#faf601",
        secondary: "#111",
      } 
    } 
  },
};
