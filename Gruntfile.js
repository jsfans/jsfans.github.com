module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        compass: {
            sass: {
                options: {
                    config: 'config.rb'
                }
            }
        },

        watch: {
            css: {
                files: ['assets/**/*.scss'],
                tasks: ['compass'],
                options: {
                    spawn: false
                }
            },
            livereload: {
                options: {
                    livereload: true,
                    spawn: false
                },
                files: ['_site/**/*']
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
};
