module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.initConfig({
        uncss: {
            dist: {
                options: {
                    htmlroot: '_site',
                    ignore: ['#carbonads', /\.carbon\-.+/]
                },
                files: {
                    '_site/css/main.css': [
                        '_site/index.html',
                        '_site/page2/index.html',
                        '_site/about/index.html',
                        '_site/projects/index.html',
                        '_site/a-hackers-guide-to-git/index.html',
                        '_site/transitioning-to-a-new-keyboard-layout/index.html',
                        '_site/understanding-javascript-inheritance-and-the-prototype-chain/index.html',
                        '_site/worst-fonts-for-programming/index.html'
                    ]
                }
            }
        },

        cssmin: {
            dist: {
                files: {
                    '_site/css/main.css': ['_site/css/main.css']
                }
            }
        }
    });

    grunt.registerTask('build', [
        'uncss',
        'cssmin'
    ]);

};