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

        coffee: {
            test: {
                options: {
                    sourceMap: true,
                    bare: true
                },
                files: [
                    {
                        expand: true,
                        cwd: 'test/',
                        src: ['**/*.coffee'],
                        dest: 'test/',
                        ext: '.js'
                    }
                ]
            },
            demo: {
                options: {
                    sourceMap: true,
                    bare: true
                },
                files: [
                    {
                        expand: true,
                        cwd: 'demo/src',
                        src: ['**/*.coffee'],
                        dest: 'demo/src',
                        ext: '.js'
                    }
                ]
            }
        },

        ts: {
            options: {
                comments: true,
                target: 'es5',
                noImplicitAny: false,
                sourceMap: true
            },
            test: {
                options: {
                    module: 'commonjs'
                },
                src: [
                    'test/**/*.ts',
                    '!test/fixtures/multi-ts/**/*.ts'
                ]
            },
            testConcat: {
                src: [
                    'test/fixtures/multi-ts/main.ts'
                ],
                out: 'test/fixtures/multi-ts/concat.js'
            },
            demo: {
                options: {
                    module: 'commonjs'
                },
                src: ['demo/src/**/*.ts']
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
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    grunt.registerTask('test', ['jshint', 'clean:test', 'coffee:test', 'ts:test', 'ts:testConcat', 'espower:test', 'nodeunit:test']);
    grunt.registerTask('demo', ['clean:demo', 'coffee:demo', 'ts:demo', 'espower:demo', 'nodeunit:demo']);
    grunt.registerTask('default', ['jshint', 'test']);
};
