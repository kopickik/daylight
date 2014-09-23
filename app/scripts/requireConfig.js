/*globals require*/
require.config({
    paths: {
        'jquery': '../bower_components/jquery/dist/jquery',
        'velocity': '../bower_components/velocity/velocity',
        'velocity-ui': '../bower_components/velocity/velocity.ui',
        'blast': '../bower_components/blast-text/jquery.blast',
        'lodash': '../bower_components/lodash/dist/lodash',
        'underscore': '../bower_components/underscore/underscore',
        'backbone': '../bower_components/backbone/backbone'
    },
    shim: {
        'velocity': {
            'deps': ['jquery']
        },
        'velocity-ui': {
            'deps': ['velocity']
        },
        'backbone': {
            'deps': ['underscore']
        },
        'blast': {
            'deps': ['jquery']
        }
    },
    packages: [

    ]
});
require(['main','jquery','velocity','blast', 'underscore','backbone'], function($, _, Backbone){});
