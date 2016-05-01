// Karma configuration
module.exports = function(config) {
    config.set({
        // base path that will be used to resolve all patterns
        basePath:'../',
        // frameworks to use, available at npmjs.org/browse/keyword/karma-adapter
        frameworks:['jasmine'],
        // list of files and patterns to load in the browser
        files:[
            'bower_components/angular/angular.js',
            'bower_components/angular-resource/angular-resource.js',
            'bower_components/angular-ui-router/release/angular-ui-router.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'app/scripts/*.js',
            'test/unit/**/*.js'
        ],
        // list of files to exclude
        exclude:[
            'test/protractor.conf.js',
            'test/e2e/*js'
        ],
        // preprocess matching files before serving them to the browser, available at npmjs.org/browser/keyword/karma-preprocessor
        preprocessors:{},
        // test results reporter to use
        // possible values: 'dots', 'progress' available at karma-reporter
        reporters:['progress'],
        // web server port
        port:9876,
        // enable or disable color in the output
        colors:true,
        // level of logging
        // possible values: config.LOG_DISABLE, config.LOG_WARN, config.LOG_INFO, config.LOG_ERROR, config.LOG_DEBUG
        logLevel: config.LOG_INFO,
        // enable or disable watching files and execute after changes
        autoWatch:true,
        // start browsers, available at karma-launcher
        browsers:['Chrome', 'PhantomJS', 'PhantomJS_custom'],
        // custom flags
        customLaunchers:{
            'PhantomJS_custom':{
                base:'PhantomJS',
                options:{
                    windowName:'my-window',
                    settings:{
                        webSecurityEnabled:false
                    }
                },
                flags:['--load-images=true'],
                debug:true
            }
        },
        phantomjsLauncher:{
            // Have phantomjs exit if a resource errir is encountered
            exitOnResourceError:true
        },
        // continuous integration mode
        // if true, karma captures browsers, run the tests and exits
        singleRun:false,
        // concurrency level
        concurrency:Infinity
    });
}