/* global module, require */

module.exports = function(grunt) {
    'use strict';

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        sass: {
            options: {
                sourceMap: false
            },
            dist: {
                files: {
                    'dist/css/style.css': 'src/css/style.scss'
                }
            }
        },

        postcss: {
            options: {
                map: false,
                processors: [
                    require('autoprefixer')({
                        browsers: ['last 5 versions']
                    })
                ]
            },
            dist: {
                src: 'dist/css/style.css',
                dest: 'dist/css/style.css'
            }
        },

        watch: {
            options: {
                spawn: false
            },
            styles: {
                files: ['src/css/**/*.scss'],
                tasks: ['sass', 'postcss']
            }
        }
    });

    grunt.registerTask('default', ['build', 'watch']);

    grunt.registerTask('build', [
        'sass',
        'postcss'
    ]);

};
