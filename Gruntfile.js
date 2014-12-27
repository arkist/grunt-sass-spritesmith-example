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

  grunt.registerTask('dev', ['sprite', 'sass:dev']);
  grunt.registerTask('dist', ['sprite', 'sass:dist']);
}
