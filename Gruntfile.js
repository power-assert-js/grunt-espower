module.exports = function(grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({
        jshint: {
            files: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.test %>'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        clean: {
            test: ['tmp'],
            demo: ['demo/dest/']
        },

        espower: {
            test: {
                files: [
                    {
                        expand: true,     // Enable dynamic expansion.
                        flatten: false,
                        cwd: 'test/fixtures/',      // Src matches are relative to this path.
                        src: ['**/*.js'], // Actual pattern(s) to match.
                        dest: 'tmp/',   // Destination path prefix.
                        ext: '.js'   // Dest filepaths will have this extension.
                    }
                ]
            },
            demo: {
                options :{
                    patterns: [
                        'test.ok(value, [message])',
                        'test.equal(actual, expected, [message])',
                        'test.notEqual(actual, expected, [message])'
                    ]
                },
                files: [
                    {
                        expand: true,     // Enable dynamic expansion.
                        cwd: 'demo/src',      // Src matches are relative to this path.
                        src: ['**/*_test.js'], // Actual pattern(s) to match.
                        dest: 'demo/dest/',   // Destination path prefix.
                        ext: '.js'   // Dest filepaths will have this extension.
                    }
                ]
            }
        },

        nodeunit: {
            test: ['test/*_test.js'],
            demo: ['demo/dest/**/*_test.js']
        }
    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    grunt.registerTask('test', ['jshint', 'clean:test', 'espower:test', 'nodeunit:test']);
    grunt.registerTask('demo', ['clean:demo', 'espower:demo', 'nodeunit:demo']);
    grunt.registerTask('default', ['jshint', 'test']);
};
