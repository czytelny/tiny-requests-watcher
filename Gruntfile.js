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

        concat: {
            options: {
                separator: ';'
            },
            dist: {
                files: {
                    'dist/tiny-rw.js': ['js/tiny-rw.js']
                }
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
                    'dist/tiny-rw.min.js': ['dist/tiny-.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('dev', ['jshint', 'karma', 'concat:dist']);
    grunt.registerTask('dist', ['concat', 'uglify']);
    grunt.registerTask('install', ['concat:dist']);
};