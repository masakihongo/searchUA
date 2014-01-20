module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*\n' +
    ' * <%= pkg.name %>\n' +
    ' * version: <%= pkg.version %>\n' +
    ' * lastupdate: <%= grunt.template.today("yyyy-mm-dd") %>\n' +
    ' * author: <%= pkg.author %>\n' +
    ' * <%= pkg.repository.type %>: <%= pkg.repository.url %>\n' +
    ' * license: MIT\n' +
    ' */\n',

    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        files: {
          'searchua.min.js': ['searchua.js']
        }
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: ['searchua.js']
    },
    watch: {
      js: {
        files: ['searchua.js'],
        tasks: ['jshint', 'uglify']
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['watch', 'uglify']);
};