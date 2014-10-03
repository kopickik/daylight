/*global define */
define([
  'jquery',
  'underscore',
  'backbone'
  ], function($, _, Backbone) {
    'use strict';
    var projectsModel = Backbone.Model.extend({
      defaults: {
        score: 10
      },
      initialize: function() {
        console.log(this);
      }
    });
    return projectsModel;
  });
