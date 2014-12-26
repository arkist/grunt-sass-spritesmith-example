module.exports = function(grunt) {
  var spriteConfig = require('./sprite.config.js');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          includePaths: [],
          outputStyle: 'compressed'
        },
        files: {
          'dist/css/style.css': 'sass/style.scss'
        }
      },
      dev: {
        options: {
          includePaths: [],
          outputStyle: 'expanded'
        },
        files: {
          'dist/css/style.css': 'sass/style.scss'
        }
      }
    },
    sprite: {
      '1x': spriteConfig('sprite'),
      '2x': spriteConfig('sprite2x')
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-spritesmith');

  // spritesmith는 async로 동작하기 때문에 걱정없다
  grunt.registerTask('dev', ['sprite', 'sass:dev']);
  grunt.registerTask('dist', ['sprite', 'sass:dist']);
}
