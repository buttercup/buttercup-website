/* global module, require */

module.exports = function(grunt) {
    "use strict";

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        sass: {
            options: {
                sourceMap: false
            },
            website: {
                files: {
                    'dist/css/style.css': 'src/css/style.scss'
                }
            }
        },

        watch: {
            options: {
                spawn: false
            },
            styles: {
                files: ['src/css/**/*.scss'],
                tasks: ['sass']
            }
        }
    });

    grunt.registerTask("default", ["build", "watch"]);

    grunt.registerTask("build", [
        "sass"
    ]);

};
