define(function(require, module, exports) {
  'use strict';
  // require dependencies
  var Backbone = require('backbone');

  // one Project
  var projectsModel = Backbone.Model.extend({
    defaults: {
      score: 10
    },
    initialize: function(){
      console.log(this);
    }

  });
  return projectsModel;


});