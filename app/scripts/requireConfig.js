/*globals require*/
require.config({
    paths: {
        'jquery': '../bower_components/jquery/dist/jquery',
        'velocity': '../bower_components/velocity/velocity',
        'velocity-ui': '../bower_components/velocity/velocity.ui',
        'blast': '../bower_components/blast-text/jquery.blast',
        'lodash': '../bower_components/lodash/dist/lodash'
    },
    shim: {
        'velocity': {
            'deps': ['jquery']
        },
        'velocity-ui': {
            'deps': ['velocity']
        }
    },
    packages: [

    ]
});
require(['main','jquery','velocity','blast', 'lodash'], function($, _){});
