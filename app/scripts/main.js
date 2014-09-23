define(function(require, module, exports) {
  // require dependencies
  var velocity = require('velocity');
  var Backbone = require('backbone');
  var projectModel = require('models/projects');

  // app here
  var myApp = function() {
    var proj1 = new projectModel;
    var emptyDiv = $('<div/>');
    emptyDiv.html('<h1>Hello World!</h1>').appendTo($('.hero-unit'));
    emptyDiv.velocity({
      opacity: 0.5,
      translateY: '80%'
    }, {duration: 2000})
    .velocity({
      translateY: 0,
      opacity: 0.8
    }, {duration: 2000})
    .velocity({
      opacity: 1,
      translateX: '225'
    }, {loop: 1})
    ;
  }
  myApp();

});