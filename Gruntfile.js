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
            },
            assets: {
                files: ['src/index.html', 'src/img/**'],
                tasks: ['copy']
            }
        },

        connect: {
            server: {
                options: {
                    livereload: true,
                    port: 3000,
                    base: 'dist'
                }
            }
        },

        copy: {
            main: {
                expand: true,
                cwd: 'src',
                src: ['index.html', 'img/**'],
                dest: 'dist/',
            }
        }
    });

    grunt.registerTask('default', [
        'connect',
        'build',
        'watch'
    ]);

    grunt.registerTask('build', [
        'copy',
        'sass',
        'postcss'
    ]);

};
