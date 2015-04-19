"use strict";

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            options: {
                jshintrc: true
            },
            all: [ 'Gruntfile.js', 'js/*.js']
        },

        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true
            }
        },

        uglify: {
            options: {
                mangleProperties: true,
                mangle: true,
                reserveDOMCache: true
            },
            dist: {
                files: {
                    'dist/tiny-rw.min.js': ['dist/tiny-rw.js']
                }
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            defau: {
                files: {
                    'dist/tiny-rw.js': ['js/tiny-rw.js']
                }
            }
        },
        less: {
            dev: {
                files: {
                    "dist/tiny-rw.css": "less/tiny-rw.less"
                }
            },
            dist: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "dist/tiny-rw.min.css": "less/tiny-rw.less"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('dist', ['concat', 'uglify', 'less:dist']);
    grunt.registerTask('install', ['concat', 'less:dev', 'jshint']);
};