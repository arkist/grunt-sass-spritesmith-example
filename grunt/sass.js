module.exports = {
  dist: {
    options: {
      outputstyle: 'compressed'
    },
    files: {
      'dist/css/sprite-all.css': 'src/scss/sprite-all.scss'
    }
  },
  dev: {
    options: {
      outputStyle: 'expanded'
    },
    files: {
      'dist/css/sprite-all.css': 'src/scss/sprite-all.scss'
    }
  }
};
