'use strict';

// Generated on 2014-09-15 using generator-jam3 0.1.0

module.exports = function (grunt) {

    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({


        browserify: {
            options: {
                verbose: true,
                watch: true,
                keepAlive: false,
                alias: ['./app/Lib:lib'],
                browserifyOptions: { debug: true }, // for grunt-browserify >= 3.0
                bundleOptions: { debug: true } // for grunt-browserify < 3.0
            },
            dev: {
                src: ['index.js'],
                dest: 'app/bundle.js',
                options: {
                    browserifyOptions: {
                        debug: true
                    }
                }
            }
        },

    });

}