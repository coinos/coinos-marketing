module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{js,svelte}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#faf601",
        secondary: "#121212"
      },
      fontSize: {
        '1.6r': '1.6rem;',
        '1.7r': '1.7rem;',
        '2r' : '2rem;',
        '2.25r' : '2.25rem;',
        '2.5r' : '2.5rem;'
       },
      maxWidth: {
        '37r' : '37rem',
        '1100px' : '1100px'
      },
      minHeight: {
        '500px': '500px', 
        '600px': '600px',
        '650px': '650px',
        '700px': '700px'
      }
    }
  },
  variants: {
    extend: {
     animation: ['hover'],
    }
  }  
};
