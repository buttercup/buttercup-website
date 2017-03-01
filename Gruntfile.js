module.exports = function(grunt) {
    'use strict';

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        sass: {
            options: {
                sourceMap: false,
                outputStyle: 'compact'
            },
            next: {
                files: {
                    'static/style.css': 'css/style.scss'
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
            next: {
                src: 'static/style.css',
                dest: 'static/style.css'
            }
        }
    });

    grunt.registerTask('next', [
        'sass:next',
        'postcss:next'
    ]);

};
