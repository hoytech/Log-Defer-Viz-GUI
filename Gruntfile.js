module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-inline-angular-templates');

  // task configuration.
  //
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    watch: {
      client: {
        files: ['client/**/*'],
        tasks: ['build-client']
      },
      'client-js': {
        files: ['client/app/**/*.js'],
        tasks: ['jshint:client']
      },
      'gruntfile': {
        files: ['Gruntfile.js'],
        tasks: ['jshint:gruntfile']
      }
    },

    clean: {
      'client-build-dir': ['.tmp']
    },

    inline_angular_templates: {
      'inline-client-templates': {
        options: {
          base: 'client/app'
        },
        files: {
          '.tmp/index.html': ['client/app/**/*.html']
        }
      }
    },

    copy: {
      'client-to-build-dir': {
        files: [{
          expand: true,
          flatten: false,
          cwd: 'client',
          src: ['**'],
          dest: '.tmp/'
        }]
      },
      'bower-to-build-dir': {
        files: [
          {
            expand: true,
            flatten: false,
            cwd: 'bower_components',
            src: [
              'jsstyles/dist/jss.min.js',
              'angularjs/angular.js',
              'angular-route/angular-route.js',
              'angular-bootstrap/ui-bootstrap-tpls.js',
              'bootstrap/dist/js/bootstrap.js',
              'jquery/dist/jquery.js',
            ],
            dest: '.tmp/assets/js/'
          },
          {
            expand: true,
            flatten: false,
            cwd: 'bower_components',
            src: [
              'bootstrap/dist/css/bootstrap.css',
            ],
            dest: '.tmp/assets/css/'
          }
        ]
      }
    },

    jshint: {
      gruntfile: ['Gruntfile.js'],
      client: ['client/app/**/*.js']
    },

  });

  grunt.registerTask('build-client',[
    'clean:client-build-dir',
    'copy:client-to-build-dir',
    'copy:bower-to-build-dir',
    'inline_angular_templates:inline-client-templates'
  ]);

  // Default task(s).
  //
  grunt.registerTask('default', ['jshint:client','build-client','watch']);

};
