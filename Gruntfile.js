module.exports = function(grunt){

    //Setup config for tasks
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        /**
         * Decided on using direct shell commands for running command development tasks instead of using node module tasks.
         * This was due to issues in finding a solution for easily running and killing long running gunt tasks.
         */
        shell:{

            /**
             * Provides and easy server for development.
             */
            server:{
               command: 'php -S localhost:9000',
                options:{
                   execOptions:{
                      cwd: './public'
                   }
                }
            },

            /**
             * Uses the node implementation of livereload for refreshing the browser.
             */
            livereload:{

                //Only look for changes in the newly regenerated blog in the public folder
                command: 'livereloadx ./public'
            },

            /**
             * Rebuilds the blog when the source has been updated.
             */
            regenerate:{

                command: 'php ./core/builder.php -w'
            }

        }

    });


    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('server',['shell:server']);
    grunt.registerTask('livereload',['shell:livereload']);
    grunt.registerTask('regenerate',['shell:regenerate']);


};